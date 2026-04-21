using System.Net;

namespace BcpParser.Api.Services;

public record BcpResponse(HttpStatusCode Status, string Body, string? ContentType);

public class BcpClient(HttpClient http, ILogger<BcpClient> log)
{
    public async Task<BcpResponse> GetAsync(string path, IQueryCollection? query, CancellationToken ct)
    {
        var url = query is null || query.Count == 0 ? path : $"{path}?{BuildQuery(query)}";
        log.LogInformation("BCP GET {Url}", url);
        using var resp = await http.GetAsync(url, ct);
        var body = await resp.Content.ReadAsStringAsync(ct);
        if (!resp.IsSuccessStatusCode)
            log.LogWarning("BCP {Status} for {Url}: {Body}", (int)resp.StatusCode, url, body);
        return new BcpResponse(resp.StatusCode, body, resp.Content.Headers.ContentType?.ToString());
    }

    private static string BuildQuery(IQueryCollection query)
    {
        var parts = new List<string>();
        foreach (var kv in query)
            foreach (var v in kv.Value)
                if (v is not null)
                    parts.Add($"{Uri.EscapeDataString(kv.Key)}={Uri.EscapeDataString(v)}");
        return string.Join('&', parts);
    }
}
