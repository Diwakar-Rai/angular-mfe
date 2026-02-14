import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

export const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //       exposedModule: './Routes',
  //     }).then((m) => m.AUTH_ROUTES),
  // },
  {
    path: 'auth',
    loadChildren: () => import('auth-mf/Routes').then((m) => m.AUTH_ROUTES),
  },
  // {
  //   path: 'notes',
  //   canActivate: [authGuard],
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4202/remoteEntry.js',
  //       exposedModule: './Routes',
  //     })
  //       .then((m) => m.NOTES_ROUTES)
  //       .catch(() => import('./core/fallback.routes'))
  //       .then((m) => m.FALLBACK_ROUTES),
  // },
  {
    path: 'notes',
    canActivate: [authGuard],
    loadChildren: () =>
      import('notes-mf/Routes')
        .then((m) => m.NOTES_ROUTES)
        .catch(() =>
          import('./core/fallback.routes').then((m) => m.FALLBACK_ROUTES),
        ),
  },
];
