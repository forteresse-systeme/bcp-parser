FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

COPY ["BcpParser.Api/BcpParser.Api.csproj", "BcpParser.Api/"]
RUN dotnet restore "BcpParser.Api/BcpParser.Api.csproj"

COPY . .
WORKDIR "/src/BcpParser.Api"
RUN dotnet publish "BcpParser.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8080
ENTRYPOINT ["dotnet", "BcpParser.Api.dll"]
