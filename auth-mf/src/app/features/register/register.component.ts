import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `<h2>Register</h2>

    <input placeholder="Email" [(ngModel)]="email" />
    <input placeholder="Password" type="password" [(ngModel)]="password" />

    <button (click)="register()">Register</button>
    <p (click)="goLogin()" style="cursor:pointer;color:blue;">
      Already have an account? Login
    </p>`,
})
export class Register {
  email = '';
  password = '';
  private http = inject(HttpClient);
  private router = inject(Router);
  register() {
    this.http
      .post('http://localhost:4000/auth/register', {
        email: this.email,
        password: this.password,
      })
      .subscribe(() => {
        this.router.navigate(['/auth']);
      });
  }

  goLogin() {
    this.router.navigate(['/auth']);
  }
}
