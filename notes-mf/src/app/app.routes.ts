import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const NOTES_ROUTES: Routes = [
  {
    path: 'notes',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Routes',
      }),
  },
];
