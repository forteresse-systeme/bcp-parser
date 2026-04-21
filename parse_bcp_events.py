import argparse
import csv
import json
import sys
import time
import urllib.parse
import urllib.request

API = "https://newprod-api.bestcoastpairings.com/v1/events"
HEADERS = {
    "client-id": "web-app",
    "Origin": "https://www.bestcoastpairings.com",
    "Referer": "https://www.bestcoastpairings.com/",
    "User-Agent": "bcp-parser/1.0",
}

CSV_COLUMNS = [
    "id", "name", "eventDate", "eventEndDate", "ended",
    "gameSystemName", "gameType", "numberOfRounds",
    "totalPlayers", "checkedInPlayers", "droppedPlayers",
    "locationName", "city", "state", "country", "formatted_address",
    "isOnlineEvent", "ownerFirstName", "ownerLastName", "ownerId",
    "ticketPrice", "numTickets", "timeZone", "url",
]


def fetch_page(params):
    qs = urllib.parse.urlencode({k: v for k, v in params.items() if v is not None})
    req = urllib.request.Request(f"{API}?{qs}", headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())


def fetch_all(base_params, page_size=50, max_pages=None, sleep=0.2):
    events = []
    next_key = None
    page = 0
    while True:
        page += 1
        params = dict(base_params, limit=page_size)
        if next_key:
            params["nextKey"] = next_key
        body = fetch_page(params)
        batch = body.get("data", [])
        events.extend(batch)
        next_key = body.get("nextKey")
        print(f"  page {page}: +{len(batch)} (total {len(events)})", file=sys.stderr)
        if not next_key or not batch:
            break
        if max_pages and page >= max_pages:
            break
        time.sleep(sleep)
    return events


def write_csv(events, path):
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=CSV_COLUMNS, extrasaction="ignore")
        w.writeheader()
        for e in events:
            w.writerow({k: e.get(k) for k in CSV_COLUMNS})


def main():
    p = argparse.ArgumentParser(description="Fetch BestCoastPairings events list")
    p.add_argument("--start", default="2026-04-12", help="startDate YYYY-MM-DD")
    p.add_argument("--end", default="2026-06-21", help="endDate YYYY-MM-DD")
    p.add_argument("--game-type", type=int, default=1, help="1=40k, 2=AoS, ...")
    p.add_argument("--status", default="ended", choices=["ended", "started", "upcoming", "all"])
    p.add_argument("--sort-key", default="eventDate")
    p.add_argument("--sort-asc", default="true", choices=["true", "false"])
    p.add_argument("--limit", type=int, default=50, help="page size")
    p.add_argument("--max-pages", type=int, default=None)
    p.add_argument("--json-out", default="events.json")
    p.add_argument("--csv-out", default="events.csv")
    args = p.parse_args()

    base = {
        "startDate": args.start,
        "endDate": args.end,
        "gameType": args.game_type,
        "eventStatus": args.status,
        "sortKey": args.sort_key,
        "sortAsc": args.sort_asc,
    }
    print(f"Fetching {args.status} events {args.start}..{args.end} gameType={args.game_type}", file=sys.stderr)
    events = fetch_all(base, page_size=args.limit, max_pages=args.max_pages)

    with open(args.json_out, "w", encoding="utf-8") as f:
        json.dump(events, f, ensure_ascii=False, indent=2, default=str)
    write_csv(events, args.csv_out)

    print(f"\n{len(events)} events -> {args.json_out}, {args.csv_out}")


if __name__ == "__main__":
    main()
