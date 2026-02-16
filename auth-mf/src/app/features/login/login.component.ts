import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <h2>Login Page (Auth Microfrontend)</h2>
    <form [formGroup]="form" (ngSubmit)="login()">
      <input type="text" placeholder="email" formControlName="email" />
      <input type="text" placeholder="password" formControlName="password" />
      <button type="submit">Login</button>
      <a [routerLink]="'/auth/register'">Register</a>
    </form>
  `,
})
export class LoginComponent {
  constructor(private http: HttpClient) {}
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  async login() {
    const { EventBusService } = await loadRemoteModule({
      type: 'module',
      exposedModule: './EventBus',
      remoteEntry: 'http://localhost:4200/remoteEntry.js',
    });
    const eventBus: any = inject(EventBusService);
    this.http
      .post('http://localhost:4000/auth/login', {
        ...this.form.value,
      })
      .subscribe((res: any) => {
        eventBus.emitLogin({ data: res });
        localStorage.setItem('token', res.token);
        window.location.href = '/notes';
      });
  }
}
