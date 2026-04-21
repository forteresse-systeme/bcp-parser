import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'events' },
  {
    path: 'events',
    loadComponent: () => import('./pages/event-list/event-list').then((m) => m.EventListComponent),
  },
  {
    path: 'events/:id',
    loadComponent: () => import('./pages/event-detail/event-detail').then((m) => m.EventDetailComponent),
  },
  { path: '**', redirectTo: 'events' },
];
