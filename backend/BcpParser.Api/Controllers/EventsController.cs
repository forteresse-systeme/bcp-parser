using System.Text.Json.Nodes;
using BcpParser.Api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;

namespace BcpParser.Api.Controllers;

[ApiController]
[Route("api/events")]
public class EventsController(BcpClient bcp) : ControllerBase
{
    [HttpGet]
    public Task<IActionResult> Search(CancellationToken ct)
        => Forward("events", Request.Query, ct);

    [HttpGet("search-with-faction")]
    public async Task<IActionResult> SearchWithFaction([FromQuery] string factionId, CancellationToken ct)
    {
        if (string.IsNullOrWhiteSpace(factionId))
            return BadRequest(new { error = "factionId is required" });
        var eventsQuery = new Dictionary<string, StringValues>(
            Request.Query.Where(kv => !kv.Key.Equals("factionId", StringComparison.OrdinalIgnoreCase)),
            StringComparer.OrdinalIgnoreCase);
        var resp = await bcp.GetAsync("events", new QueryCollection(eventsQuery), ct);
        if ((int)resp.Status >= 400)
            return new ContentResult { Content = resp.Body, ContentType = resp.ContentType, StatusCode = (int)resp.Status };
        var root = JsonNode.Parse(resp.Body);
        var events = root?["data"] as JsonArray;
        if (events is null) return new ContentResult { Content = resp.Body, ContentType = resp.ContentType, StatusCode = (int)resp.Status };

        var sem = new SemaphoreSlim(8);
        var tasks = events.Select(async ev =>
        {
            var id = ev?["id"]?.GetValue<string>();
            if (id is null) return (ev, false);
            await sem.WaitAsync(ct);
            try
            {
                var playersResp = await bcp.GetAsync("players",
                    new QueryCollection(new Dictionary<string, StringValues>
                    {
                        ["eventId"] = id,
                        ["limit"] = "99",
                    }), ct);
                if ((int)playersResp.Status >= 400) return (ev, false);
                var pbody = JsonNode.Parse(playersResp.Body);
                var players = pbody?["data"] as JsonArray;
                if (players is null) return (ev, false);
                foreach (var p in players)
                {
                    var fid = p?["factionId"]?.GetValue<string>();
                    if (fid == factionId) return (ev, true);
                }
                return (ev, false);
            }
            finally { sem.Release(); }
        }).ToList();

        var results = await Task.WhenAll(tasks);
        var filtered = new JsonArray();
        foreach (var (ev, matched) in results)
            if (matched && ev is not null) filtered.Add(ev.DeepClone());

        var output = new JsonObject
        {
            ["data"] = filtered,
            ["nextKey"] = root?["nextKey"]?.DeepClone(),
            ["scanned"] = events.Count,
            ["matched"] = filtered.Count,
        };
        return new ContentResult
        {
            Content = output.ToJsonString(),
            ContentType = "application/json; charset=utf-8",
            StatusCode = 200,
        };
    }

    [HttpGet("{id}")]
    public Task<IActionResult> GetById(string id, CancellationToken ct)
        => Forward($"events/{Uri.EscapeDataString(id)}", null, ct);

    [HttpGet("{id}/players")]
    public Task<IActionResult> Players(string id, CancellationToken ct)
        => Forward("players", new QueryCollection(BuildQueryDict(id)), ct);

    [HttpGet("{id}/placings")]
    public Task<IActionResult> Placings(string id, CancellationToken ct)
    {
        var dict = BuildQueryDict(id, ("sortKey", "placing"), ("sortAsc", "true"));
        if (!dict.ContainsKey("expand[]"))
            dict["expand[]"] = new StringValues(new[] { "user", "team", "army", "subFaction", "character" });
        return Forward("eventplacings", new QueryCollection(dict), ct);
    }

    [HttpGet("{id}/pairings")]
    public Task<IActionResult> Pairings(string id, CancellationToken ct)
        => Forward("pairings", new QueryCollection(BuildQueryDict(id, ("pairingType", "Pairing"))), ct);

    private async Task<IActionResult> Forward(string path, IQueryCollection? query, CancellationToken ct)
    {
        var resp = await bcp.GetAsync(path, query, ct);
        return new ContentResult
        {
            Content = resp.Body,
            ContentType = resp.ContentType ?? "application/json; charset=utf-8",
            StatusCode = (int)resp.Status,
        };
    }

    private Dictionary<string, StringValues> BuildQueryDict(string eventId, params (string k, string v)[] defaults)
    {
        var dict = Request.Query.ToDictionary(kv => kv.Key, kv => kv.Value, StringComparer.OrdinalIgnoreCase);
        dict["eventId"] = eventId;
        foreach (var (k, v) in defaults)
            if (!dict.ContainsKey(k))
                dict[k] = v;
        return dict;
    }
}
