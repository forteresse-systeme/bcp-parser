import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import {
  EventDetail,
  EventSearchParams,
  EventSummary,
  PagedResponse,
  Pairing,
  Placing,
  Player,
} from './models';

const MAX_LIMIT = 99;

@Injectable({ providedIn: 'root' })
export class EventsService {
  private http = inject(HttpClient);
  private base = '/api/events';

  search(params: EventSearchParams): Observable<PagedResponse<EventSummary>> {
    const limit = Math.min(params.limit ?? 25, MAX_LIMIT);
    const url = params.factionId ? `${this.base}/search-with-faction` : this.base;
    return this.http.get<PagedResponse<EventSummary>>(url, { params: toParams({ ...params, limit }) });
  }

  factions(gameType: number): Observable<Array<{ id: string; name: string }>> {
    return this.http.get<Array<{ id: string; name: string }>>('/api/factions', {
      params: toParams({ gameType }),
    });
  }

  getById(id: string): Observable<EventDetail> {
    return this.http.get<EventDetail>(`${this.base}/${encodeURIComponent(id)}`);
  }

  playersAll(id: string, maxPages = 20): Observable<Player[]> {
    return this.paginate<Player>(`${this.base}/${encodeURIComponent(id)}/players`, {}, maxPages);
  }

  placingsAll(id: string, maxPages = 20): Observable<Placing[]> {
    return this.paginate<Placing>(`${this.base}/${encodeURIComponent(id)}/placings`, {}, maxPages);
  }

  pairingsAll(id: string, maxPages = 40): Observable<Pairing[]> {
    return this.paginate<Pairing>(`${this.base}/${encodeURIComponent(id)}/pairings`, {}, maxPages);
  }

  private paginate<T>(url: string, extra: Record<string, any>, maxPages: number): Observable<T[]> {
    const fetchPage = (nextKey: string | undefined, page: number, acc: T[]): Observable<T[]> =>
      this.http
        .get<PagedResponse<T>>(url, { params: toParams({ ...extra, limit: MAX_LIMIT, nextKey }) })
        .pipe(
          switchMap((resp) => {
            const combined = acc.concat(resp.data ?? []);
            const nk = typeof resp.nextKey === 'string' && resp.nextKey.length > 0 ? resp.nextKey : null;
            if (nk && page < maxPages) return fetchPage(nk, page + 1, combined);
            return of(combined);
          }),
        );
    return fetchPage(undefined, 1, []);
  }
}

function toParams(obj: Record<string, any>): HttpParams {
  let p = new HttpParams();
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null || v === '') continue;
    p = p.set(k, String(v));
  }
  return p;
}
