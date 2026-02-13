import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Routes',
      }).then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'notes',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Routes',
      })
        .then((m) => m.NOTES_ROUTES)
        .catch(() => import('./core/fallback.routes'))
        .then((m) => m.FALLBACK_ROUTES),
  },
];
