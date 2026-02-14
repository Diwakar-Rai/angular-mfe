import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
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
  notes: any[] = [];
  load() {
    this.http
      .get('http://localhost:4000/notes')
      .subscribe((data: any) => (this.notes = data));
  }
}
