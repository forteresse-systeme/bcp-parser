import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, Input, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { EventsService } from '../../core/events.service';
import { EventDetail, Pairing, Placing, Player } from '../../core/models';

type Tab = 'overview' | 'players' | 'placings' | 'pairings';

@Component({
  selector: 'app-event-detail',
  imports: [RouterLink, DatePipe, CurrencyPipe, DecimalPipe],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetailComponent {
  private api = inject(EventsService);

  @Input({ required: true }) id!: string;

  tab = signal<Tab>('overview');
  event = signal<EventDetail | null>(null);
  players = signal<Player[]>([]);
  placings = signal<Placing[]>([]);
  pairings = signal<Pairing[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  rounds = computed(() => {
    const rs = new Set<number>();
    for (const p of this.pairings()) if (typeof p.round === 'number') rs.add(p.round);
    return Array.from(rs).sort((a, b) => a - b);
  });
  round = signal<number | null>(null);
  pairingsForRound = computed(() => {
    const r = this.round();
    return r === null ? this.pairings() : this.pairings().filter((p) => p.round === r);
  });

  expanded = signal<Set<string>>(new Set());

  listUrlByUserId = computed(() => {
    const m = new Map<string, string>();
    for (const p of this.players()) {
      if (p.user?.id && p['listUrl']) m.set(p.user.id, this.fullListUrl(p['listUrl']));
    }
    return m;
  });

  listUrlByPlayerId = computed(() => {
    const m = new Map<string, string>();
    for (const p of this.players()) {
      if (p.id && p['listUrl']) m.set(p.id, this.fullListUrl(p['listUrl']));
    }
    return m;
  });

  private fullListUrl(rel: string): string {
    if (rel.startsWith('http')) return rel;
    return `https://www.bestcoastpairings.com${rel.startsWith('/') ? '' : '/'}${rel}`;
  }

  listForPlayer(p: Player | null | undefined): string | null {
    const url = p?.['listUrl'];
    return url ? this.fullListUrl(url) : null;
  }

  listForUserId(uid: string | undefined | null): string | null {
    return uid ? this.listUrlByUserId().get(uid) ?? null : null;
  }

  listForPlayerId(pid: string | undefined | null): string | null {
    return pid ? this.listUrlByPlayerId().get(pid) ?? null : null;
  }

  opponentIndex = computed(() => {
    const userToPlayer = new Map<string, string>();
    for (const p of this.players()) {
      if (p.user?.id && p.id) userToPlayer.set(p.user.id, p.id);
    }
    const records = new Map<string, { w: number; l: number; t: number }>();
    const bumpRecord = (playerId: string, result: any) => {
      const rec = records.get(playerId) ?? { w: 0, l: 0, t: 0 };
      const s = String(result);
      if (s === '2') rec.w++;
      else if (s === '0') rec.l++;
      else if (s === '1') rec.t++;
      records.set(playerId, rec);
    };
    for (const p of this.pairings()) {
      const md = p['metaData'] ?? {};
      if (p['player1']?.id) bumpRecord(p['player1'].id, md['p1-gameResult']);
      if (p['player2']?.id) bumpRecord(p['player2'].id, md['p2-gameResult']);
    }
    const opps = new Map<
      string,
      Array<{ round: number; name: string; faction: string; result: string; score: string; oppScore: string; oppId: string | null }>
    >();
    for (const p of this.pairings()) {
      const md = p['metaData'] ?? {};
      const p1 = p['player1'];
      const p2 = p['player2'];
      const round = p.round;
      if (p1?.id) {
        const list = opps.get(p1.id) ?? [];
        list.push({
          round,
          name: p2 ? `${p2.firstName ?? ''} ${p2.lastName ?? ''}`.trim() || 'Unknown' : 'BYE',
          faction: p2?.faction?.name ?? p2?.army?.name ?? '',
          result: this.resultLabel(md['p1-gameResult']),
          score: this.str(md['p1-gamePoints']),
          oppScore: this.str(md['p2-gamePoints']),
          oppId: p2?.id ?? null,
        });
        opps.set(p1.id, list);
      }
      if (p2?.id) {
        const list = opps.get(p2.id) ?? [];
        list.push({
          round,
          name: p1 ? `${p1.firstName ?? ''} ${p1.lastName ?? ''}`.trim() || 'Unknown' : 'BYE',
          faction: p1?.faction?.name ?? p1?.army?.name ?? '',
          result: this.resultLabel(md['p2-gameResult']),
          score: this.str(md['p2-gamePoints']),
          oppScore: this.str(md['p1-gamePoints']),
          oppId: p1?.id ?? null,
        });
        opps.set(p2.id, list);
      }
    }
    for (const arr of opps.values()) arr.sort((a, b) => a.round - b.round);
    return { userToPlayer, records, opps };
  });

  formatRecord(rec: { w: number; l: number; t: number } | undefined): string {
    if (!rec) return '';
    return rec.t ? `${rec.w}-${rec.l}-${rec.t}` : `${rec.w}-${rec.l}`;
  }

  placingRecord(placing: Placing): string {
    const idx = this.opponentIndex();
    const uid = placing.user?.id;
    if (!uid) return '';
    const pid = idx.userToPlayer.get(uid);
    return pid ? this.formatRecord(idx.records.get(pid)) : '';
  }

  placingOpponents(placing: Placing) {
    const idx = this.opponentIndex();
    const uid = placing.user?.id;
    if (!uid) return [];
    const pid = idx.userToPlayer.get(uid);
    if (!pid) return [];
    const arr = idx.opps.get(pid) ?? [];
    return arr.map((o) => ({
      ...o,
      oppRecord: o.oppId ? this.formatRecord(idx.records.get(o.oppId)) : '',
    }));
  }

  toggleExpand(id: string) {
    const next = new Set(this.expanded());
    next.has(id) ? next.delete(id) : next.add(id);
    this.expanded.set(next);
  }

  isExpanded(id: string): boolean {
    return this.expanded().has(id);
  }

  private resultLabel(r: any): string {
    const s = String(r);
    if (s === '2') return 'W';
    if (s === '0') return 'L';
    if (s === '1') return 'T';
    return '';
  }

  private str(v: any): string {
    return v === undefined || v === null || v === '' ? '' : String(v);
  }

  ngOnInit() {
    this.loading.set(true);
    this.error.set(null);
    forkJoin({
      event: this.api.getById(this.id),
      players: this.api.playersAll(this.id),
      placings: this.api.placingsAll(this.id),
      pairings: this.api.pairingsAll(this.id),
    }).subscribe({
      next: (r) => {
        this.event.set(r.event);
        this.players.set(r.players);
        this.placings.set(r.placings);
        this.pairings.set(r.pairings);
        const rs = this.rounds();
        this.round.set(rs.length ? rs[rs.length - 1] : null);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.error?.error ?? err?.message ?? 'Request failed');
        this.loading.set(false);
      },
    });
  }

  setTab(t: Tab) { this.tab.set(t); }

  playerName(p: Player | undefined | null): string {
    if (!p?.user) return '—';
    return `${p.user.firstName ?? ''} ${p.user.lastName ?? ''}`.trim() || '—';
  }

  sideName(side: any): string {
    if (!side) return 'BYE';
    const u = side.user ?? side.player?.user ?? side;
    const fn = u?.firstName ?? '';
    const ln = u?.lastName ?? '';
    const nm = `${fn} ${ln}`.trim();
    return nm || 'Unknown';
  }

  sideFaction(side: any): string {
    return side?.faction?.name ?? side?.player?.faction?.name ?? '';
  }

  sideScore(pair: Pairing, which: 1 | 2): string {
    const md = pair['metaData'] ?? {};
    const pts = which === 1 ? md['p1-gamePoints'] : md['p2-gamePoints'];
    if (pts === undefined || pts === null || pts === '') return '';
    return String(pts);
  }

  sideResult(pair: Pairing, which: 1 | 2): string {
    const md = pair['metaData'] ?? {};
    const r = which === 1 ? md['p1-gameResult'] : md['p2-gameResult'];
    if (r === '2' || r === 2) return 'W';
    if (r === '0' || r === 0) return 'L';
    if (r === '1' || r === 1) return 'T';
    return '';
  }

  sideNameDirect(side: any): string {
    if (!side) return 'BYE';
    const fn = side.firstName ?? side.user?.firstName ?? '';
    const ln = side.lastName ?? side.user?.lastName ?? '';
    const nm = `${fn} ${ln}`.trim();
    return nm || 'Unknown';
  }

  sideFactionDirect(side: any): string {
    return side?.faction?.name ?? side?.army?.name ?? '';
  }
}
