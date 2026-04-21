using System.Text.Json;
using System.Text.Json.Nodes;
using BcpParser.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace BcpParser.Api.Controllers;

[ApiController]
[Route("api/factions")]
public class FactionsController(BcpClient bcp) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> List([FromQuery] int gameType, CancellationToken ct)
    {
        var all = new List<JsonNode>();
        string? nextKey = null;
        for (var page = 0; page < 5; page++)
        {
            var dict = new Dictionary<string, Microsoft.Extensions.Primitives.StringValues>
            {
                ["gameType"] = gameType.ToString(),
                ["limit"] = "99",
            };
            if (nextKey is not null) dict["nextKey"] = nextKey;
            var resp = await bcp.GetAsync("armies", new QueryCollection(dict), ct);
            if ((int)resp.Status >= 400)
                return StatusCode((int)resp.Status, resp.Body);
            var root = JsonNode.Parse(resp.Body);
            if (root?["data"] is JsonArray arr)
                foreach (var item in arr)
                    if (item is not null) all.Add(item.DeepClone());
            nextKey = AsString(root?["nextKey"]);
            if (string.IsNullOrEmpty(nextKey) || (root?["data"] as JsonArray)?.Count is null or 0) break;
        }
        var simplified = all
            .Select(a => new { id = AsString(a["id"]), name = AsString(a["name"]) })
            .Where(x => x.id is not null && x.name is not null)
            .OrderBy(x => x.name, StringComparer.OrdinalIgnoreCase)
            .ToList();
        return Ok(simplified);
    }

    private static string? AsString(JsonNode? node)
        => node is JsonValue v && v.TryGetValue<string>(out var s) ? s : null;
}
