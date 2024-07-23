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
    },
    {
        path: 'login-5',
        loadComponent: () => import('./ui/login-05/login-05.component').then(m => m.Login05Component)
    },
    {
        path: 'login-6',
        loadComponent: () => import('./ui/login-06/login-06.component').then(m => m.Login06Component)
    },
    {
        path: 'register-1',
        loadComponent: () => import('./ui/register-01/register-01.component').then(m => m.Register01Component)
    },
    {
        path: 'register-2',
        loadComponent: () => import('./ui/register-02/register-02.component').then(m => m.Register02Component)
    },
    {
        path: 'register-3',
        loadComponent: () => import('./ui/register-03/register-03.component').then(m => m.Register03Component)
    },
    {
        path: 'register-4',
        loadComponent: () => import('./ui/register-04/register-04.component').then(m => m.Register04Component)
    },
    {
        path: 'register-5',
        loadComponent: () => import('./ui/register-05/register-05.component').then(m => m.Register05Component)
    },
    {
        path: 'reset-pw1',
        loadComponent: () => import('./ui/reset-pw01/reset-pw01.component').then(m => m.ResetPw01Component)
    },
    {
        path: 'reset-pw2',
        loadComponent: () => import('./ui/reset-pw02/reset-pw02.component').then(m => m.ResetPw02Component)
    },
    {
        path: 'reset-pw3',
        loadComponent: () => import('./ui/reset-pw03/reset-pw03.component').then(m => m.ResetPw03Component)
    },
    {
        path: 'reset-pw4',
        loadComponent: () => import('./ui/reset-pw04/reset-pw04.component').then(m => m.ResetPw04Component)
    },
    {
        path: 'reset-pw5',
        loadComponent: () => import('./ui/reset-pw05/reset-pw05.component').then(m => m.ResetPw05Component)
    },
    {
        path: 'forgot-pw1',
        loadComponent: () => import('./ui/forgot-pw01/forgot-pw01.component').then(m => m.ForgotPw01Component)
    }
];
