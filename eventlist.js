import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/chunk-V3HO542L.js");import {
  EventsService
} from "/chunk-BY3HDYIO.js";
import {
  __spreadProps,
  __spreadValues
} from "/chunk-VUJOFXKG.js";

// src/app/pages/event-list/event-list.ts
import { DatePipe } from "/@fs/E:/workspace/joushi40k/bcp-parser/frontend/.angular/cache/21.2.7/frontend/vite/deps/@angular_common.js?v=4afba344";
import { Component, computed, inject, signal } from "/@fs/E:/workspace/joushi40k/bcp-parser/frontend/.angular/cache/21.2.7/frontend/vite/deps/@angular_core.js?v=4afba344";
import { RouterLink } from "/@fs/E:/workspace/joushi40k/bcp-parser/frontend/.angular/cache/21.2.7/frontend/vite/deps/@angular_router.js?v=4afba344";
import * as i0 from "/@fs/E:/workspace/joushi40k/bcp-parser/frontend/.angular/cache/21.2.7/frontend/vite/deps/@angular_core.js?v=4afba344";
var _c0 = (a0) => ["/events", a0];
var _forTrack0 = ($index, $item) => $item.value;
var _forTrack1 = ($index, $item) => $item.id;
function EventListComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "option", 4);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r1 = ctx.$implicit;
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275property("value", g_r1.value)("selected", g_r1.value === ctx_r1.gameType());
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(g_r1.label);
  }
}
function EventListComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "option", 4);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r3 = ctx.$implicit;
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275property("value", f_r3.id)("selected", f_r3.id === ctx_r1.factionId());
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(f_r3.name);
  }
}
function EventListComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "p", 13);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function EventListComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275text(0, " \xB7 filtered by faction ");
  }
}
function EventListComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275textInterpolate1(" of ", ctx_r1.scanned(), " scanned ");
  }
}
function EventListComponent_For_69_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275text(0);
  }
  if (rf & 2) {
    const e_r4 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275textInterpolate1(", ", e_r4.state);
  }
}
function EventListComponent_For_69_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275text(0);
  }
  if (rf & 2) {
    const e_r4 = i0.\u0275\u0275nextContext().$implicit;
    i0.\u0275\u0275textInterpolate1(", ", e_r4.country);
  }
}
function EventListComponent_For_69_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "tr")(1, "td");
    i0.\u0275\u0275text(2);
    i0.\u0275\u0275pipe(3, "date");
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(4, "td")(5, "a", 18);
    i0.\u0275\u0275text(6);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(7, "td")(8, "div");
    i0.\u0275\u0275text(9);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(10, "div", 19);
    i0.\u0275\u0275text(11);
    i0.\u0275\u0275conditionalCreate(12, EventListComponent_For_69_Conditional_12_Template, 1, 1);
    i0.\u0275\u0275conditionalCreate(13, EventListComponent_For_69_Conditional_13_Template, 1, 1);
    i0.\u0275\u0275elementEnd()();
    i0.\u0275\u0275elementStart(14, "td", 15);
    i0.\u0275\u0275text(15);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(16, "td", 15);
    i0.\u0275\u0275text(17);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(18, "td");
    i0.\u0275\u0275text(19);
    i0.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(i0.\u0275\u0275pipeBind2(3, 11, e_r4.eventDate, "yyyy-MM-dd"));
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275property("routerLink", i0.\u0275\u0275pureFunction1(14, _c0, e_r4.id));
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(e_r4.name);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(e_r4.locationName || "\u2014");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(e_r4.city);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(e_r4.state ? 12 : -1);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275conditional(e_r4.country ? 13 : -1);
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(e_r4.totalPlayers ?? "\u2014");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(e_r4.numberOfRounds ?? "\u2014");
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate2("", e_r4.ownerFirstName, " ", e_r4.ownerLastName);
  }
}
function EventListComponent_ForEmpty_70_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "tr")(1, "td", 20);
    i0.\u0275\u0275text(2, "No events.");
    i0.\u0275\u0275elementEnd()();
  }
}
function EventListComponent_ForEmpty_70_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275conditionalCreate(0, EventListComponent_ForEmpty_70_Conditional_0_Template, 3, 0, "tr");
  }
  if (rf & 2) {
    const ctx_r1 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275conditional(!ctx_r1.loading() ? 0 : -1);
  }
}
var GAME_TYPES = [
  { value: 1, label: "Warhammer 40k" },
  { value: 2, label: "Age of Sigmar" },
  { value: 3, label: "Kill Team" },
  { value: 4, label: "Horus Heresy" },
  { value: 5, label: "Warhammer The Old World" },
  { value: 6, label: "Bolt Action" },
  { value: 7, label: "X-Wing" },
  { value: 8, label: "Star Wars Legion" },
  { value: 9, label: "Flames of War" },
  { value: 10, label: "Infinity" },
  { value: 11, label: "MCP" },
  { value: 12, label: "Warmachine" }
];
var EventListComponent = class _EventListComponent {
  api = inject(EventsService);
  gameTypes = GAME_TYPES;
  startDate = signal("2026-04-12", ...ngDevMode ? [{ debugName: "startDate" }] : (
    /* istanbul ignore next */
    []
  ));
  endDate = signal("2026-06-21", ...ngDevMode ? [{ debugName: "endDate" }] : (
    /* istanbul ignore next */
    []
  ));
  gameType = signal(1, ...ngDevMode ? [{ debugName: "gameType" }] : (
    /* istanbul ignore next */
    []
  ));
  status = signal("ended", ...ngDevMode ? [{ debugName: "status" }] : (
    /* istanbul ignore next */
    []
  ));
  sortAsc = signal(true, ...ngDevMode ? [{ debugName: "sortAsc" }] : (
    /* istanbul ignore next */
    []
  ));
  limit = signal(25, ...ngDevMode ? [{ debugName: "limit" }] : (
    /* istanbul ignore next */
    []
  ));
  factionId = signal("", ...ngDevMode ? [{ debugName: "factionId" }] : (
    /* istanbul ignore next */
    []
  ));
  factions = signal([], ...ngDevMode ? [{ debugName: "factions" }] : (
    /* istanbul ignore next */
    []
  ));
  events = signal([], ...ngDevMode ? [{ debugName: "events" }] : (
    /* istanbul ignore next */
    []
  ));
  nextKey = signal(null, ...ngDevMode ? [{ debugName: "nextKey" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  page = signal(0, ...ngDevMode ? [{ debugName: "page" }] : (
    /* istanbul ignore next */
    []
  ));
  scanned = signal(0, ...ngDevMode ? [{ debugName: "scanned" }] : (
    /* istanbul ignore next */
    []
  ));
  searchedFilters = signal(null, ...ngDevMode ? [{ debugName: "searchedFilters" }] : (
    /* istanbul ignore next */
    []
  ));
  hasMore = computed(() => !!this.nextKey(), ...ngDevMode ? [{ debugName: "hasMore" }] : (
    /* istanbul ignore next */
    []
  ));
  filtersChanged = computed(() => {
    const snap = this.searchedFilters();
    if (!snap)
      return false;
    return snap.startDate !== this.startDate() || snap.endDate !== this.endDate() || snap.gameType !== this.gameType() || snap.eventStatus !== this.status() || snap.sortAsc !== this.sortAsc() || snap.limit !== this.limit() || (snap.factionId ?? "") !== (this.factionId() || "");
  }, ...ngDevMode ? [{ debugName: "filtersChanged" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loadFactions();
    this.load(true);
  }
  onGameTypeChange(gt) {
    this.gameType.set(gt);
    this.factionId.set("");
    this.loadFactions();
  }
  loadFactions() {
    this.api.factions(this.gameType()).subscribe({
      next: (f) => this.factions.set(f),
      error: () => this.factions.set([])
    });
  }
  selectedGameLabel = computed(() => {
    const gt = this.gameType();
    return GAME_TYPES.find((g) => g.value === gt)?.label ?? `Game ${gt}`;
  }, ...ngDevMode ? [{ debugName: "selectedGameLabel" }] : (
    /* istanbul ignore next */
    []
  ));
  load(reset) {
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
        sortKey: "eventDate",
        sortAsc: this.sortAsc(),
        limit: this.limit(),
        factionId: this.factionId() || void 0
      });
    }
    const snap = this.searchedFilters();
    if (!snap)
      return;
    this.loading.set(true);
    this.error.set(null);
    this.api.search(__spreadProps(__spreadValues({}, snap), {
      nextKey: reset ? void 0 : this.nextKey() ?? void 0
    })).subscribe({
      next: (r) => {
        this.events.update((prev) => [...prev, ...r.data ?? []]);
        this.nextKey.set(r.nextKey ?? null);
        this.page.update((p) => p + 1);
        if (typeof r.scanned === "number")
          this.scanned.update((s) => s + r.scanned);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set(err?.message ?? "Request failed");
        this.loading.set(false);
      }
    });
  }
  submit() {
    this.load(true);
  }
  loadMore() {
    if (this.hasMore() && !this.loading() && !this.filtersChanged())
      this.load(false);
  }
  static \u0275fac = function EventListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _EventListComponent, selectors: [["app-event-list"]], decls: 74, vars: 22, consts: [[1, "filters"], [3, "ngSubmit"], ["type", "date", 3, "input", "value"], [3, "change", "value"], [3, "value", "selected"], ["value", "", 3, "selected"], ["value", "upcoming", 3, "selected"], ["value", "started", 3, "selected"], ["value", "ended", 3, "selected"], [3, "change"], ["value", "asc", 3, "selected"], ["value", "desc", 3, "selected"], ["type", "submit", 3, "disabled"], [1, "error"], [1, "summary"], [1, "num"], [1, "pager"], [3, "click", "disabled"], [3, "routerLink"], [1, "muted"], ["colspan", "6", 1, "muted"]], template: function EventListComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "section", 0)(1, "form", 1);
      i0.\u0275\u0275listener("ngSubmit", function EventListComponent_Template_form_ngSubmit_1_listener() {
        return ctx.submit();
      });
      i0.\u0275\u0275elementStart(2, "label")(3, "span");
      i0.\u0275\u0275text(4, "Start");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(5, "input", 2);
      i0.\u0275\u0275listener("input", function EventListComponent_Template_input_input_5_listener($event) {
        return ctx.startDate.set($event.target.value);
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(6, "label")(7, "span");
      i0.\u0275\u0275text(8, "End");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(9, "input", 2);
      i0.\u0275\u0275listener("input", function EventListComponent_Template_input_input_9_listener($event) {
        return ctx.endDate.set($event.target.value);
      });
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(10, "label")(11, "span");
      i0.\u0275\u0275text(12, "Game");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(13, "select", 3);
      i0.\u0275\u0275listener("change", function EventListComponent_Template_select_change_13_listener($event) {
        return ctx.onGameTypeChange(+$event.target.value);
      });
      i0.\u0275\u0275repeaterCreate(14, EventListComponent_For_15_Template, 2, 3, "option", 4, _forTrack0);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(16, "label")(17, "span");
      i0.\u0275\u0275text(18, "Faction");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(19, "select", 3);
      i0.\u0275\u0275listener("change", function EventListComponent_Template_select_change_19_listener($event) {
        return ctx.factionId.set($event.target.value);
      });
      i0.\u0275\u0275elementStart(20, "option", 5);
      i0.\u0275\u0275text(21, "Any");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275repeaterCreate(22, EventListComponent_For_23_Template, 2, 3, "option", 4, _forTrack1);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(24, "label")(25, "span");
      i0.\u0275\u0275text(26, "Status");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(27, "select", 3);
      i0.\u0275\u0275listener("change", function EventListComponent_Template_select_change_27_listener($event) {
        return ctx.status.set($event.target.value);
      });
      i0.\u0275\u0275elementStart(28, "option", 6);
      i0.\u0275\u0275text(29, "Upcoming");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(30, "option", 7);
      i0.\u0275\u0275text(31, "Started");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(32, "option", 8);
      i0.\u0275\u0275text(33, "Ended");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(34, "label")(35, "span");
      i0.\u0275\u0275text(36, "Sort");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(37, "select", 9);
      i0.\u0275\u0275listener("change", function EventListComponent_Template_select_change_37_listener($event) {
        return ctx.sortAsc.set($event.target.value === "asc");
      });
      i0.\u0275\u0275elementStart(38, "option", 10);
      i0.\u0275\u0275text(39, "Date \u2191");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(40, "option", 11);
      i0.\u0275\u0275text(41, "Date \u2193");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(42, "button", 12);
      i0.\u0275\u0275text(43);
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275conditionalCreate(44, EventListComponent_Conditional_44_Template, 2, 1, "p", 13);
      i0.\u0275\u0275elementStart(45, "section", 14)(46, "span");
      i0.\u0275\u0275text(47);
      i0.\u0275\u0275conditionalCreate(48, EventListComponent_Conditional_48_Template, 1, 0);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(49, "span");
      i0.\u0275\u0275text(50);
      i0.\u0275\u0275conditionalCreate(51, EventListComponent_Conditional_51_Template, 1, 1);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(52, "table")(53, "thead")(54, "tr")(55, "th");
      i0.\u0275\u0275text(56, "Date");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(57, "th");
      i0.\u0275\u0275text(58, "Name");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(59, "th");
      i0.\u0275\u0275text(60, "Location");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(61, "th", 15);
      i0.\u0275\u0275text(62, "Players");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(63, "th", 15);
      i0.\u0275\u0275text(64, "Rounds");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(65, "th");
      i0.\u0275\u0275text(66, "Organizer");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(67, "tbody");
      i0.\u0275\u0275repeaterCreate(68, EventListComponent_For_69_Template, 20, 16, "tr", null, _forTrack1, false, EventListComponent_ForEmpty_70_Template, 1, 1);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(71, "div", 16)(72, "button", 17);
      i0.\u0275\u0275listener("click", function EventListComponent_Template_button_click_72_listener() {
        return ctx.loadMore();
      });
      i0.\u0275\u0275text(73);
      i0.\u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275property("value", ctx.startDate());
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275property("value", ctx.endDate());
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275property("value", ctx.gameType());
      i0.\u0275\u0275advance();
      i0.\u0275\u0275repeater(ctx.gameTypes);
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275property("value", ctx.factionId());
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("selected", ctx.factionId() === "");
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275repeater(ctx.factions());
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275property("value", ctx.status());
      i0.\u0275\u0275advance();
      i0.\u0275\u0275property("selected", ctx.status() === "upcoming");
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275property("selected", ctx.status() === "started");
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275property("selected", ctx.status() === "ended");
      i0.\u0275\u0275advance(6);
      i0.\u0275\u0275property("selected", ctx.sortAsc());
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275property("selected", !ctx.sortAsc());
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275property("disabled", ctx.loading());
      i0.\u0275\u0275advance();
      i0.\u0275\u0275textInterpolate(ctx.loading() ? "Loading\u2026" : "Search");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional(ctx.error() ? 44 : -1);
      i0.\u0275\u0275advance(3);
      i0.\u0275\u0275textInterpolate2("", ctx.selectedGameLabel(), " \xB7 ", ctx.status());
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional(ctx.factionId() ? 48 : -1);
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275textInterpolate1(" ", ctx.events().length, " events loaded");
      i0.\u0275\u0275advance();
      i0.\u0275\u0275conditional(ctx.factionId() && ctx.scanned() > 0 ? 51 : -1);
      i0.\u0275\u0275advance(17);
      i0.\u0275\u0275repeater(ctx.events());
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275property("disabled", !ctx.hasMore() || ctx.loading() || ctx.filtersChanged());
      i0.\u0275\u0275advance();
      i0.\u0275\u0275textInterpolate1(" ", ctx.loading() ? "Loading\u2026" : ctx.filtersChanged() ? "Click Search to apply new filters" : ctx.hasMore() ? "Load more" : "End of results", " ");
    }
  }, dependencies: [RouterLink, DatePipe], styles: ["\n.filters[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: end;\n  margin-bottom: 1rem;\n}\n.filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-size: 0.8rem;\n  color: #bbb;\n}\n.filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n}\n.summary[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0.5rem 0;\n  color: #aaa;\n  font-size: 0.9rem;\n}\ntd.num[_ngcontent-%COMP%], \nth.num[_ngcontent-%COMP%] {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 1.25rem 0;\n}\n/*# sourceMappingURL=event-list.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(EventListComponent, [{
    type: Component,
    args: [{ selector: "app-event-list", imports: [RouterLink, DatePipe], template: `<section class="filters">
  <form (ngSubmit)="submit()">
    <label>
      <span>Start</span>
      <input type="date" [value]="startDate()" (input)="startDate.set($any($event.target).value)" />
    </label>
    <label>
      <span>End</span>
      <input type="date" [value]="endDate()" (input)="endDate.set($any($event.target).value)" />
    </label>
    <label>
      <span>Game</span>
      <select [value]="gameType()" (change)="onGameTypeChange(+$any($event.target).value)">
        @for (g of gameTypes; track g.value) {
          <option [value]="g.value" [selected]="g.value === gameType()">{{ g.label }}</option>
        }
      </select>
    </label>
    <label>
      <span>Faction</span>
      <select [value]="factionId()" (change)="factionId.set($any($event.target).value)">
        <option value="" [selected]="factionId() === ''">Any</option>
        @for (f of factions(); track f.id) {
          <option [value]="f.id" [selected]="f.id === factionId()">{{ f.name }}</option>
        }
      </select>
    </label>
    <label>
      <span>Status</span>
      <select [value]="status()" (change)="status.set($any($event.target).value)">
        <option value="upcoming" [selected]="status() === 'upcoming'">Upcoming</option>
        <option value="started" [selected]="status() === 'started'">Started</option>
        <option value="ended" [selected]="status() === 'ended'">Ended</option>
      </select>
    </label>
    <label>
      <span>Sort</span>
      <select (change)="sortAsc.set($any($event.target).value === 'asc')">
        <option value="asc" [selected]="sortAsc()">Date \u2191</option>
        <option value="desc" [selected]="!sortAsc()">Date \u2193</option>
      </select>
    </label>
    <button type="submit" [disabled]="loading()">{{ loading() ? 'Loading\u2026' : 'Search' }}</button>
  </form>
</section>

@if (error()) { <p class="error">{{ error() }}</p> }

<section class="summary">
  <span>{{ selectedGameLabel() }} \xB7 {{ status() }}@if (factionId()) { \xB7 filtered by faction }</span>
  <span>
    {{ events().length }} events loaded@if (factionId() && scanned() > 0) { of {{ scanned() }} scanned }
  </span>
</section>

<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Name</th>
      <th>Location</th>
      <th class="num">Players</th>
      <th class="num">Rounds</th>
      <th>Organizer</th>
    </tr>
  </thead>
  <tbody>
    @for (e of events(); track e.id) {
      <tr>
        <td>{{ e.eventDate | date: 'yyyy-MM-dd' }}</td>
        <td><a [routerLink]="['/events', e.id]">{{ e.name }}</a></td>
        <td>
          <div>{{ e.locationName || '\u2014' }}</div>
          <div class="muted">{{ e.city }}@if (e.state) {, {{ e.state }}}@if (e.country) {, {{ e.country }}}</div>
        </td>
        <td class="num">{{ e.totalPlayers ?? '\u2014' }}</td>
        <td class="num">{{ e.numberOfRounds ?? '\u2014' }}</td>
        <td>{{ e.ownerFirstName }} {{ e.ownerLastName }}</td>
      </tr>
    } @empty {
      @if (!loading()) { <tr><td colspan="6" class="muted">No events.</td></tr> }
    }
  </tbody>
</table>

<div class="pager">
  <button (click)="loadMore()" [disabled]="!hasMore() || loading() || filtersChanged()">
    {{ loading()
      ? 'Loading\u2026'
      : filtersChanged()
        ? 'Click Search to apply new filters'
        : (hasMore() ? 'Load more' : 'End of results') }}
  </button>
</div>
`, styles: ["/* src/app/pages/event-list/event-list.css */\n.filters form {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: end;\n  margin-bottom: 1rem;\n}\n.filters label {\n  display: flex;\n  flex-direction: column;\n  font-size: 0.8rem;\n  color: #bbb;\n}\n.filters label span {\n  margin-bottom: 0.2rem;\n}\n.summary {\n  display: flex;\n  justify-content: space-between;\n  margin: 0.5rem 0;\n  color: #aaa;\n  font-size: 0.9rem;\n}\ntd.num,\nth.num {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.pager {\n  display: flex;\n  justify-content: center;\n  margin: 1.25rem 0;\n}\n/*# sourceMappingURL=event-list.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(EventListComponent, { className: "EventListComponent", filePath: "src/app/pages/event-list/event-list.ts", lineNumber: 28 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fevent-list%2Fevent-list.ts%40EventListComponent";
  function EventListComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i0.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(EventListComponent, m.default, [i0], [RouterLink, DatePipe, Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && EventListComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && EventListComponent_HmrLoad(d.timestamp)));
})();
export {
  EventListComponent
};


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXZlbnQtbGlzdC9ldmVudC1saXN0LnRzIiwic3JjL2FwcC9wYWdlcy9ldmVudC1saXN0L2V2ZW50LWxpc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIGNvbXB1dGVkLCBpbmplY3QsIHNpZ25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTGluayB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29yZS9ldmVudHMuc2VydmljZSc7XG5pbXBvcnQgeyBFdmVudFNlYXJjaFBhcmFtcywgRXZlbnRTdGF0dXMsIEV2ZW50U3VtbWFyeSB9IGZyb20gJy4uLy4uL2NvcmUvbW9kZWxzJztcblxuY29uc3QgR0FNRV9UWVBFUzogQXJyYXk8eyB2YWx1ZTogbnVtYmVyOyBsYWJlbDogc3RyaW5nIH0+ID0gW1xuICB7IHZhbHVlOiAxLCBsYWJlbDogJ1dhcmhhbW1lciA0MGsnIH0sXG4gIHsgdmFsdWU6IDIsIGxhYmVsOiAnQWdlIG9mIFNpZ21hcicgfSxcbiAgeyB2YWx1ZTogMywgbGFiZWw6ICdLaWxsIFRlYW0nIH0sXG4gIHsgdmFsdWU6IDQsIGxhYmVsOiAnSG9ydXMgSGVyZXN5JyB9LFxuICB7IHZhbHVlOiA1LCBsYWJlbDogJ1dhcmhhbW1lciBUaGUgT2xkIFdvcmxkJyB9LFxuICB7IHZhbHVlOiA2LCBsYWJlbDogJ0JvbHQgQWN0aW9uJyB9LFxuICB7IHZhbHVlOiA3LCBsYWJlbDogJ1gtV2luZycgfSxcbiAgeyB2YWx1ZTogOCwgbGFiZWw6ICdTdGFyIFdhcnMgTGVnaW9uJyB9LFxuICB7IHZhbHVlOiA5LCBsYWJlbDogJ0ZsYW1lcyBvZiBXYXInIH0sXG4gIHsgdmFsdWU6IDEwLCBsYWJlbDogJ0luZmluaXR5JyB9LFxuICB7IHZhbHVlOiAxMSwgbGFiZWw6ICdNQ1AnIH0sXG4gIHsgdmFsdWU6IDEyLCBsYWJlbDogJ1dhcm1hY2hpbmUnIH0sXG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZXZlbnQtbGlzdCcsXG4gIGltcG9ydHM6IFtSb3V0ZXJMaW5rLCBEYXRlUGlwZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9ldmVudC1saXN0Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vZXZlbnQtbGlzdC5jc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBFdmVudExpc3RDb21wb25lbnQge1xuICBwcml2YXRlIGFwaSA9IGluamVjdChFdmVudHNTZXJ2aWNlKTtcblxuICBnYW1lVHlwZXMgPSBHQU1FX1RZUEVTO1xuICBzdGFydERhdGUgPSBzaWduYWw8c3RyaW5nPignMjAyNi0wNC0xMicpO1xuICBlbmREYXRlID0gc2lnbmFsPHN0cmluZz4oJzIwMjYtMDYtMjEnKTtcbiAgZ2FtZVR5cGUgPSBzaWduYWw8bnVtYmVyPigxKTtcbiAgc3RhdHVzID0gc2lnbmFsPEV2ZW50U3RhdHVzPignZW5kZWQnKTtcbiAgc29ydEFzYyA9IHNpZ25hbDxib29sZWFuPih0cnVlKTtcbiAgbGltaXQgPSBzaWduYWw8bnVtYmVyPigyNSk7XG4gIGZhY3Rpb25JZCA9IHNpZ25hbDxzdHJpbmc+KCcnKTtcblxuICBmYWN0aW9ucyA9IHNpZ25hbDxBcnJheTx7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9Pj4oW10pO1xuICBldmVudHMgPSBzaWduYWw8RXZlbnRTdW1tYXJ5W10+KFtdKTtcbiAgbmV4dEtleSA9IHNpZ25hbDxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgbG9hZGluZyA9IHNpZ25hbDxib29sZWFuPihmYWxzZSk7XG4gIGVycm9yID0gc2lnbmFsPHN0cmluZyB8IG51bGw+KG51bGwpO1xuICBwYWdlID0gc2lnbmFsPG51bWJlcj4oMCk7XG4gIHNjYW5uZWQgPSBzaWduYWw8bnVtYmVyPigwKTtcbiAgc2VhcmNoZWRGaWx0ZXJzID0gc2lnbmFsPE9taXQ8RXZlbnRTZWFyY2hQYXJhbXMsICduZXh0S2V5Jz4gfCBudWxsPihudWxsKTtcblxuICBoYXNNb3JlID0gY29tcHV0ZWQoKCkgPT4gISF0aGlzLm5leHRLZXkoKSk7XG4gIGZpbHRlcnNDaGFuZ2VkID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGNvbnN0IHNuYXAgPSB0aGlzLnNlYXJjaGVkRmlsdGVycygpO1xuICAgIGlmICghc25hcCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoXG4gICAgICBzbmFwLnN0YXJ0RGF0ZSAhPT0gdGhpcy5zdGFydERhdGUoKSB8fFxuICAgICAgc25hcC5lbmREYXRlICE9PSB0aGlzLmVuZERhdGUoKSB8fFxuICAgICAgc25hcC5nYW1lVHlwZSAhPT0gdGhpcy5nYW1lVHlwZSgpIHx8XG4gICAgICBzbmFwLmV2ZW50U3RhdHVzICE9PSB0aGlzLnN0YXR1cygpIHx8XG4gICAgICBzbmFwLnNvcnRBc2MgIT09IHRoaXMuc29ydEFzYygpIHx8XG4gICAgICBzbmFwLmxpbWl0ICE9PSB0aGlzLmxpbWl0KCkgfHxcbiAgICAgIChzbmFwLmZhY3Rpb25JZCA/PyAnJykgIT09ICh0aGlzLmZhY3Rpb25JZCgpIHx8ICcnKVxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9hZEZhY3Rpb25zKCk7XG4gICAgdGhpcy5sb2FkKHRydWUpO1xuICB9XG5cbiAgb25HYW1lVHlwZUNoYW5nZShndDogbnVtYmVyKSB7XG4gICAgdGhpcy5nYW1lVHlwZS5zZXQoZ3QpO1xuICAgIHRoaXMuZmFjdGlvbklkLnNldCgnJyk7XG4gICAgdGhpcy5sb2FkRmFjdGlvbnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEZhY3Rpb25zKCkge1xuICAgIHRoaXMuYXBpLmZhY3Rpb25zKHRoaXMuZ2FtZVR5cGUoKSkuc3Vic2NyaWJlKHtcbiAgICAgIG5leHQ6IChmKSA9PiB0aGlzLmZhY3Rpb25zLnNldChmKSxcbiAgICAgIGVycm9yOiAoKSA9PiB0aGlzLmZhY3Rpb25zLnNldChbXSksXG4gICAgfSk7XG4gIH1cblxuICBzZWxlY3RlZEdhbWVMYWJlbCA9IGNvbXB1dGVkKCgpID0+IHtcbiAgICBjb25zdCBndCA9IHRoaXMuZ2FtZVR5cGUoKTtcbiAgICByZXR1cm4gR0FNRV9UWVBFUy5maW5kKChnKSA9PiBnLnZhbHVlID09PSBndCk/LmxhYmVsID8/IGBHYW1lICR7Z3R9YDtcbiAgfSk7XG5cbiAgbG9hZChyZXNldDogYm9vbGVhbikge1xuICAgIGlmIChyZXNldCkge1xuICAgICAgdGhpcy5ldmVudHMuc2V0KFtdKTtcbiAgICAgIHRoaXMubmV4dEtleS5zZXQobnVsbCk7XG4gICAgICB0aGlzLnBhZ2Uuc2V0KDApO1xuICAgICAgdGhpcy5zY2FubmVkLnNldCgwKTtcbiAgICAgIHRoaXMuc2VhcmNoZWRGaWx0ZXJzLnNldCh7XG4gICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5zdGFydERhdGUoKSxcbiAgICAgICAgZW5kRGF0ZTogdGhpcy5lbmREYXRlKCksXG4gICAgICAgIGdhbWVUeXBlOiB0aGlzLmdhbWVUeXBlKCksXG4gICAgICAgIGV2ZW50U3RhdHVzOiB0aGlzLnN0YXR1cygpLFxuICAgICAgICBzb3J0S2V5OiAnZXZlbnREYXRlJyxcbiAgICAgICAgc29ydEFzYzogdGhpcy5zb3J0QXNjKCksXG4gICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0KCksXG4gICAgICAgIGZhY3Rpb25JZDogdGhpcy5mYWN0aW9uSWQoKSB8fCB1bmRlZmluZWQsXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3Qgc25hcCA9IHRoaXMuc2VhcmNoZWRGaWx0ZXJzKCk7XG4gICAgaWYgKCFzbmFwKSByZXR1cm47XG4gICAgdGhpcy5sb2FkaW5nLnNldCh0cnVlKTtcbiAgICB0aGlzLmVycm9yLnNldChudWxsKTtcbiAgICB0aGlzLmFwaVxuICAgICAgLnNlYXJjaCh7XG4gICAgICAgIC4uLnNuYXAsXG4gICAgICAgIG5leHRLZXk6IHJlc2V0ID8gdW5kZWZpbmVkIDogKHRoaXMubmV4dEtleSgpID8/IHVuZGVmaW5lZCksXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChyOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLmV2ZW50cy51cGRhdGUoKHByZXYpID0+IFsuLi5wcmV2LCAuLi4oci5kYXRhID8/IFtdKV0pO1xuICAgICAgICAgIHRoaXMubmV4dEtleS5zZXQoci5uZXh0S2V5ID8/IG51bGwpO1xuICAgICAgICAgIHRoaXMucGFnZS51cGRhdGUoKHApID0+IHAgKyAxKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHIuc2Nhbm5lZCA9PT0gJ251bWJlcicpIHRoaXMuc2Nhbm5lZC51cGRhdGUoKHMpID0+IHMgKyByLnNjYW5uZWQpO1xuICAgICAgICAgIHRoaXMubG9hZGluZy5zZXQoZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3Iuc2V0KGVycj8ubWVzc2FnZSA/PyAnUmVxdWVzdCBmYWlsZWQnKTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcuc2V0KGZhbHNlKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICB9XG5cbiAgc3VibWl0KCkge1xuICAgIHRoaXMubG9hZCh0cnVlKTtcbiAgfVxuXG4gIGxvYWRNb3JlKCkge1xuICAgIGlmICh0aGlzLmhhc01vcmUoKSAmJiAhdGhpcy5sb2FkaW5nKCkgJiYgIXRoaXMuZmlsdGVyc0NoYW5nZWQoKSkgdGhpcy5sb2FkKGZhbHNlKTtcbiAgfVxufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJmaWx0ZXJzXCI+XG4gIDxmb3JtIChuZ1N1Ym1pdCk9XCJzdWJtaXQoKVwiPlxuICAgIDxsYWJlbD5cbiAgICAgIDxzcGFuPlN0YXJ0PC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgW3ZhbHVlXT1cInN0YXJ0RGF0ZSgpXCIgKGlucHV0KT1cInN0YXJ0RGF0ZS5zZXQoJGFueSgkZXZlbnQudGFyZ2V0KS52YWx1ZSlcIiAvPlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsPlxuICAgICAgPHNwYW4+RW5kPC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgW3ZhbHVlXT1cImVuZERhdGUoKVwiIChpbnB1dCk9XCJlbmREYXRlLnNldCgkYW55KCRldmVudC50YXJnZXQpLnZhbHVlKVwiIC8+XG4gICAgPC9sYWJlbD5cbiAgICA8bGFiZWw+XG4gICAgICA8c3Bhbj5HYW1lPC9zcGFuPlxuICAgICAgPHNlbGVjdCBbdmFsdWVdPVwiZ2FtZVR5cGUoKVwiIChjaGFuZ2UpPVwib25HYW1lVHlwZUNoYW5nZSgrJGFueSgkZXZlbnQudGFyZ2V0KS52YWx1ZSlcIj5cbiAgICAgICAgQGZvciAoZyBvZiBnYW1lVHlwZXM7IHRyYWNrIGcudmFsdWUpIHtcbiAgICAgICAgICA8b3B0aW9uIFt2YWx1ZV09XCJnLnZhbHVlXCIgW3NlbGVjdGVkXT1cImcudmFsdWUgPT09IGdhbWVUeXBlKClcIj57eyBnLmxhYmVsIH19PC9vcHRpb24+XG4gICAgICAgIH1cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvbGFiZWw+XG4gICAgPGxhYmVsPlxuICAgICAgPHNwYW4+RmFjdGlvbjwvc3Bhbj5cbiAgICAgIDxzZWxlY3QgW3ZhbHVlXT1cImZhY3Rpb25JZCgpXCIgKGNoYW5nZSk9XCJmYWN0aW9uSWQuc2V0KCRhbnkoJGV2ZW50LnRhcmdldCkudmFsdWUpXCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIiBbc2VsZWN0ZWRdPVwiZmFjdGlvbklkKCkgPT09ICcnXCI+QW55PC9vcHRpb24+XG4gICAgICAgIEBmb3IgKGYgb2YgZmFjdGlvbnMoKTsgdHJhY2sgZi5pZCkge1xuICAgICAgICAgIDxvcHRpb24gW3ZhbHVlXT1cImYuaWRcIiBbc2VsZWN0ZWRdPVwiZi5pZCA9PT0gZmFjdGlvbklkKClcIj57eyBmLm5hbWUgfX08L29wdGlvbj5cbiAgICAgICAgfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9sYWJlbD5cbiAgICA8bGFiZWw+XG4gICAgICA8c3Bhbj5TdGF0dXM8L3NwYW4+XG4gICAgICA8c2VsZWN0IFt2YWx1ZV09XCJzdGF0dXMoKVwiIChjaGFuZ2UpPVwic3RhdHVzLnNldCgkYW55KCRldmVudC50YXJnZXQpLnZhbHVlKVwiPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwidXBjb21pbmdcIiBbc2VsZWN0ZWRdPVwic3RhdHVzKCkgPT09ICd1cGNvbWluZydcIj5VcGNvbWluZzwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3RhcnRlZFwiIFtzZWxlY3RlZF09XCJzdGF0dXMoKSA9PT0gJ3N0YXJ0ZWQnXCI+U3RhcnRlZDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZW5kZWRcIiBbc2VsZWN0ZWRdPVwic3RhdHVzKCkgPT09ICdlbmRlZCdcIj5FbmRlZDwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9sYWJlbD5cbiAgICA8bGFiZWw+XG4gICAgICA8c3Bhbj5Tb3J0PC9zcGFuPlxuICAgICAgPHNlbGVjdCAoY2hhbmdlKT1cInNvcnRBc2Muc2V0KCRhbnkoJGV2ZW50LnRhcmdldCkudmFsdWUgPT09ICdhc2MnKVwiPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXNjXCIgW3NlbGVjdGVkXT1cInNvcnRBc2MoKVwiPkRhdGUg4oaRPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZXNjXCIgW3NlbGVjdGVkXT1cIiFzb3J0QXNjKClcIj5EYXRlIOKGkzwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9sYWJlbD5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwibG9hZGluZygpXCI+e3sgbG9hZGluZygpID8gJ0xvYWRpbmfigKYnIDogJ1NlYXJjaCcgfX08L2J1dHRvbj5cbiAgPC9mb3JtPlxuPC9zZWN0aW9uPlxuXG5AaWYgKGVycm9yKCkpIHsgPHAgY2xhc3M9XCJlcnJvclwiPnt7IGVycm9yKCkgfX08L3A+IH1cblxuPHNlY3Rpb24gY2xhc3M9XCJzdW1tYXJ5XCI+XG4gIDxzcGFuPnt7IHNlbGVjdGVkR2FtZUxhYmVsKCkgfX0gwrcge3sgc3RhdHVzKCkgfX1AaWYgKGZhY3Rpb25JZCgpKSB7IMK3IGZpbHRlcmVkIGJ5IGZhY3Rpb24gfTwvc3Bhbj5cbiAgPHNwYW4+XG4gICAge3sgZXZlbnRzKCkubGVuZ3RoIH19IGV2ZW50cyBsb2FkZWRAaWYgKGZhY3Rpb25JZCgpICYmIHNjYW5uZWQoKSA+IDApIHsgb2Yge3sgc2Nhbm5lZCgpIH19IHNjYW5uZWQgfVxuICA8L3NwYW4+XG48L3NlY3Rpb24+XG5cbjx0YWJsZT5cbiAgPHRoZWFkPlxuICAgIDx0cj5cbiAgICAgIDx0aD5EYXRlPC90aD5cbiAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgIDx0aD5Mb2NhdGlvbjwvdGg+XG4gICAgICA8dGggY2xhc3M9XCJudW1cIj5QbGF5ZXJzPC90aD5cbiAgICAgIDx0aCBjbGFzcz1cIm51bVwiPlJvdW5kczwvdGg+XG4gICAgICA8dGg+T3JnYW5pemVyPC90aD5cbiAgICA8L3RyPlxuICA8L3RoZWFkPlxuICA8dGJvZHk+XG4gICAgQGZvciAoZSBvZiBldmVudHMoKTsgdHJhY2sgZS5pZCkge1xuICAgICAgPHRyPlxuICAgICAgICA8dGQ+e3sgZS5ldmVudERhdGUgfCBkYXRlOiAneXl5eS1NTS1kZCcgfX08L3RkPlxuICAgICAgICA8dGQ+PGEgW3JvdXRlckxpbmtdPVwiWycvZXZlbnRzJywgZS5pZF1cIj57eyBlLm5hbWUgfX08L2E+PC90ZD5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxkaXY+e3sgZS5sb2NhdGlvbk5hbWUgfHwgJ+KAlCcgfX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibXV0ZWRcIj57eyBlLmNpdHkgfX1AaWYgKGUuc3RhdGUpIHssIHt7IGUuc3RhdGUgfX19QGlmIChlLmNvdW50cnkpIHssIHt7IGUuY291bnRyeSB9fX08L2Rpdj5cbiAgICAgICAgPC90ZD5cbiAgICAgICAgPHRkIGNsYXNzPVwibnVtXCI+e3sgZS50b3RhbFBsYXllcnMgPz8gJ+KAlCcgfX08L3RkPlxuICAgICAgICA8dGQgY2xhc3M9XCJudW1cIj57eyBlLm51bWJlck9mUm91bmRzID8/ICfigJQnIH19PC90ZD5cbiAgICAgICAgPHRkPnt7IGUub3duZXJGaXJzdE5hbWUgfX0ge3sgZS5vd25lckxhc3ROYW1lIH19PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgfSBAZW1wdHkge1xuICAgICAgQGlmICghbG9hZGluZygpKSB7IDx0cj48dGQgY29sc3Bhbj1cIjZcIiBjbGFzcz1cIm11dGVkXCI+Tm8gZXZlbnRzLjwvdGQ+PC90cj4gfVxuICAgIH1cbiAgPC90Ym9keT5cbjwvdGFibGU+XG5cbjxkaXYgY2xhc3M9XCJwYWdlclwiPlxuICA8YnV0dG9uIChjbGljayk9XCJsb2FkTW9yZSgpXCIgW2Rpc2FibGVkXT1cIiFoYXNNb3JlKCkgfHwgbG9hZGluZygpIHx8IGZpbHRlcnNDaGFuZ2VkKClcIj5cbiAgICB7eyBsb2FkaW5nKClcbiAgICAgID8gJ0xvYWRpbmfigKYnXG4gICAgICA6IGZpbHRlcnNDaGFuZ2VkKClcbiAgICAgICAgPyAnQ2xpY2sgU2VhcmNoIHRvIGFwcGx5IG5ldyBmaWx0ZXJzJ1xuICAgICAgICA6IChoYXNNb3JlKCkgPyAnTG9hZCBtb3JlJyA6ICdFbmQgb2YgcmVzdWx0cycpIH19XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsV0FBVyxVQUFVLFFBQVEsY0FBYztBQUNwRCxTQUFTLGtCQUFrQjtBOzs7Ozs7QUNZakIsSUFBQSw0QkFBQSxHQUFBLFVBQUEsQ0FBQTtBQUE4RCxJQUFBLG9CQUFBLENBQUE7QUFBYSxJQUFBLDBCQUFBOzs7OztBQUFuRSxJQUFBLHdCQUFBLFNBQUEsS0FBQSxLQUFBLEVBQWlCLFlBQUEsS0FBQSxVQUFBLE9BQUEsU0FBQSxDQUFBO0FBQXFD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