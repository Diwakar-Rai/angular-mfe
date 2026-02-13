import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <h2>Login Page (Auth Microfrontend)</h2>
    <button (click)="login()">Login</button>
  `,
})
export class LoginComponent {
  login() {
    localStorage.setItem('token', 'fake-jwt');
    window.location.href = '/notes';
  }
}
