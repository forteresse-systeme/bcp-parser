using BcpParser.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers()
    .AddJsonOptions(o => o.JsonSerializerOptions.PropertyNamingPolicy = System.Text.Json.JsonNamingPolicy.CamelCase);
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHttpClient<BcpClient>(c =>
{
    c.BaseAddress = new Uri(builder.Configuration["Bcp:BaseUrl"] ?? "https://newprod-api.bestcoastpairings.com/v1/");
    c.DefaultRequestHeaders.Add("client-id", builder.Configuration["Bcp:ClientId"] ?? "web-app");
    c.DefaultRequestHeaders.Add("Origin", "https://www.bestcoastpairings.com");
    c.DefaultRequestHeaders.Add("Referer", "https://www.bestcoastpairings.com/");
    c.DefaultRequestHeaders.Add("User-Agent", "bcp-parser/1.0");
    c.DefaultRequestHeaders.AcceptEncoding.ParseAdd("gzip, deflate, br");
}).ConfigurePrimaryHttpMessageHandler(() => new HttpClientHandler
{
    AutomaticDecompression = System.Net.DecompressionMethods.All,
});

const string CorsPolicy = "frontend";
builder.Services.AddCors(o => o.AddPolicy(CorsPolicy, p => p
    .WithOrigins("http://localhost:4200")
    .AllowAnyHeader()
    .AllowAnyMethod()));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(CorsPolicy);
app.MapGet("/health", () => Results.Ok(new { status = "ok" }));
app.MapControllers();

app.Run();
