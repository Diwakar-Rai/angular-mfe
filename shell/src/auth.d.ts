declare module 'auth-mf/Routes' {
  import { Routes } from '@angular/router';
  export const AUTH_ROUTES: Routes;
}

declare module 'notes-mf/Routes' {
  import { Routes } from '@angular/router';
  import { FALLBACK_ROUTES } from './app/core/fallback.routes';
  export const NOTES_ROUTES: Routes | FALLBACK_ROUTES;
}
