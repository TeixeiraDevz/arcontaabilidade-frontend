import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./app/features/home/pages/home/home').then(m => m.Home) },
  { path: 'clientes', loadComponent: () => import('./app/features/clientes/pages/clientes/clientes').then(m => m.Clientes) },
  { path: 'equipe', loadComponent: () => import('./app/features/equipe/pages/equipe/equipe').then(m => m.Equipe) },
  { path: 'login', loadComponent: () => import('./app/features/auth/pages/login/login').then(m => m.Login) },
  { path: '**', redirectTo: '' }
];
