export interface PagedResponse<T> {
  data: T[];
  nextKey?: string | null;
}

export interface EventSummary {
  id: string;
  name: string;
  eventDate: string;
  eventEndDate?: string;
  ended: boolean;
  started?: boolean;
  gameSystemName?: string;
  gameType: number;
  numberOfRounds?: number;
  totalPlayers?: number;
  checkedInPlayers?: number;
  droppedPlayers?: number;
  locationName?: string;
  city?: string;
  state?: string;
  country?: string;
  formatted_address?: string;
  isOnlineEvent?: boolean;
  ownerFirstName?: string;
  ownerLastName?: string;
  ticketPrice?: number;
  numTickets?: number;
  timeZone?: string;
}

export interface EventDetail extends EventSummary {
  description?: string | null;
  currentRound?: number;
  photoUrl?: string;
  placingMetrics?: Array<{ name: string; key: string; isOn: boolean }>;
  [key: string]: any;
}

export interface Player {
  id: string;
  eventId: string;
  user?: { id: string; firstName?: string; lastName?: string };
  faction?: { id: string; name: string };
  factionId?: string;
  checkedIn?: boolean;
  dropped?: boolean;
  listUrl?: string;
  [key: string]: any;
}

export interface Placing {
  id: string;
  placing: number;
  points: number;
  player?: Player;
  user?: { id: string; firstName?: string; lastName?: string };
  faction?: { id: string; name: string };
  [key: string]: any;
}

export interface Pairing {
  pairingId: string;
  table: number;
  round: number;
  isDone?: boolean;
  published?: boolean;
  player1?: any;
  player2?: any;
  player1Game?: any;
  player2Game?: any;
  [key: string]: any;
}

export type EventStatus = 'upcoming' | 'started' | 'ended';

export interface EventSearchParams {
  startDate?: string;
  endDate?: string;
  gameType?: number;
  eventStatus?: EventStatus;
  sortKey?: string;
  sortAsc?: boolean;
  limit?: number;
  nextKey?: string;
  name?: string;
  factionId?: string;
}
