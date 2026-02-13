import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav style="display:flex; gap:20px;">
      <a routerLink="/auth">Auth</a>
      <a routerLink="/notes">Notes</a>
    </nav>

    <hr />

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
