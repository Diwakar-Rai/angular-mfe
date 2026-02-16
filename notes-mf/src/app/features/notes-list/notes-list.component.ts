import { Component, inject, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { loadRemoteModule } from '@angular-architects/module-federation';
@Component({
  selector: 'app-notes-list',
  standalone: true,
  template: `
    <h2>Notes</h2>
    <button (click)="load()">Load Notes</button>

    <ul>
      <li *ngFor="let note of notes">{{ note.title }}</li>
    </ul>
  `,
  imports: [CommonModule],
})
export class NotesListComponent {
  private http = inject(HttpClient);
  private injector = inject(Injector);
  notes: any[] = [];
  ngOnInit() {
    console.log('Notes app');
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
      exposedModule: './EventBus',
    }).then((m) => {
      const EventBusClass = m.EventBusService || m.default?.EventBusService;
      const eventBus = this.injector.get(EventBusClass);
      eventBus.login$.subscribe((data: any) => {
        console.log('User logged in:', data);
      });
    });
    this.load();
  }
  load() {
    this.http.get('http://localhost:4000/notes').subscribe((data: any) => {
      console.log(data);
      this.notes = data;
    });
  }
}
