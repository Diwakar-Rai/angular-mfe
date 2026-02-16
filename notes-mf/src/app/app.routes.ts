import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { NoteForm } from './features/note-form/note-form.component';
import { NotesListComponent } from './features/notes-list/notes-list.component';

export const NOTES_ROUTES: Routes = [
  // !Incorrect usage of loadRemoteModule
  // {
  //   path: 'notes',
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: 'module',
  //       remoteEntry: 'http://localhost:4202/remoteEntry.js',
  //       exposedModule: './Routes',
  //     }),
  // },
  { path: '', component: NotesListComponent },
  { path: 'create', component: NoteForm },
];
