import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'login-1',
        loadComponent: () => import('./ui/login-01/login-01.component').then(m => m.Login01Component)
    },
    {
        path: 'login-2',
        loadComponent: () => import('./ui/login-02/login-02.component').then(m => m.Login02Component)
    },
    {
        path: 'login-3',
        loadComponent: () => import('./ui/login-03/login-03.component').then(m => m.Login03Component)
    },
    {
        path: 'login-4',
        loadComponent: () => import('./ui/login-04/login-04.component').then(m => m.Login04Component)
    }
];
