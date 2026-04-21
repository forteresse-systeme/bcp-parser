import { DatePipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventsService } from '../../core/events.service';
import { EventSearchParams, EventStatus, EventSummary } from '../../core/models';

const GAME_TYPES: Array<{ value: number; label: string }> = [
  { value: 1, label: 'Warhammer 40k' },
  { value: 2, label: 'Age of Sigmar' },
  { value: 3, label: 'Kill Team' },
  { value: 4, label: 'Horus Heresy' },
  { value: 5, label: 'Warhammer The Old World' },
  { value: 6, label: 'Bolt Action' },
  { value: 7, label: 'X-Wing' },
  { value: 8, label: 'Star Wars Legion' },
  { value: 9, label: 'Flames of War' },
  { value: 10, label: 'Infinity' },
  { value: 11, label: 'MCP' },
  { value: 12, label: 'Warmachine' },
];

@Component({
  selector: 'app-event-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './event-list.html',
  styleUrl: './event-list.css',
})
export class EventListComponent {
  private api = inject(EventsService);

  gameTypes = GAME_TYPES;
  startDate = signal<string>('2026-04-12');
  endDate = signal<string>('2026-06-21');
  gameType = signal<number>(1);
  status = signal<EventStatus>('ended');
  sortAsc = signal<boolean>(true);
  limit = signal<number>(25);
  factionId = signal<string>('');

  factions = signal<Array<{ id: string; name: string }>>([]);
  events = signal<EventSummary[]>([]);
  nextKey = signal<string | null>(null);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);
  page = signal<number>(0);
  scanned = signal<number>(0);
  searchedFilters = signal<Omit<EventSearchParams, 'nextKey'> | null>(null);

  hasMore = computed(() => !!this.nextKey());
  filtersChanged = computed(() => {
    const snap = this.searchedFilters();
    if (!snap) return false;
    return (
      snap.startDate !== this.startDate() ||
      snap.endDate !== this.endDate() ||
      snap.gameType !== this.gameType() ||
      snap.eventStatus !== this.status() ||
      snap.sortAsc !== this.sortAsc() ||
      snap.limit !== this.limit() ||
      (snap.factionId ?? '') !== (this.factionId() || '')
    );
  });

  constructor() {
    this.loadFactions();
    let debounce: ReturnType<typeof setTimeout> | null = null;
    effect(() => {
      const key = [
        this.startDate(),
        this.endDate(),
        this.gameType(),
        this.status(),
        this.sortAsc(),
        this.limit(),
        this.factionId(),
      ].join('|');
      void key;
      if (debounce) clearTimeout(debounce);
      debounce = setTimeout(() => this.load(true), 250);
    });
  }

  onGameTypeChange(gt: number) {
    this.gameType.set(gt);
    this.factionId.set('');
    this.loadFactions();
  }

  private loadFactions() {
    this.api.factions(this.gameType()).subscribe({
      next: (f) => this.factions.set(f),
      error: () => this.factions.set([]),
    });
  }

  selectedGameLabel = computed(() => {
    const gt = this.gameType();
    return GAME_TYPES.find((g) => g.value === gt)?.label ?? `Game ${gt}`;
  });

  load(reset: boolean) {
    if (reset) {
      this.events.set([]);
      this.nextKey.set(null);
      this.page.set(0);
      this.scanned.set(0);
      this.searchedFilters.set({
        startDate: this.startDate(),
        endDate: this.endDate(),
        gameType: this.gameType(),
        eventStatus: this.status(),
        sortKey: 'eventDate',
        sortAsc: this.sortAsc(),
        limit: this.limit(),
        factionId: this.factionId() || undefined,
      });
    }
    const snap = this.searchedFilters();
    if (!snap) return;
    this.loading.set(true);
    this.error.set(null);
    this.api
      .search({
        ...snap,
        nextKey: reset ? undefined : (this.nextKey() ?? undefined),
      })
      .subscribe({
        next: (r: any) => {
          this.events.update((prev) => [...prev, ...(r.data ?? [])]);
          this.nextKey.set(r.nextKey ?? null);
          this.page.update((p) => p + 1);
          if (typeof r.scanned === 'number') this.scanned.update((s) => s + r.scanned);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set(err?.message ?? 'Request failed');
          this.loading.set(false);
        },
      });
  }

  submit() {
    this.load(true);
  }

  loadMore() {
    if (this.hasMore() && !this.loading() && !this.filtersChanged()) this.load(false);
  }
}
