import { Component } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  standalone: true,
  template: `
    <h2>Notes Microfrontend</h2>
    <ul>
      <li>Note 1</li>
      <li>Note 2</li>
    </ul>
  `,
})
export class NotesListComponent {}
