import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { Register } from './features/register/register.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: Register,
  },
];
