import { Routes } from '@angular/router';

export const routes: Routes = [

    {
    path: 'auth/login',
    loadComponent: () =>
      import('./modules/auth/login/login').then(m => m.LoginComponent)
  },
  
  {
    path: '',
    loadComponent: () =>
      import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadComponent: () =>
          import('./modules/user/dashboard/dashboard').then(m => m.Dashboard)
      },
      {
        path: 'proyectos',
        loadComponent: () =>
          import('./modules/user/proyectos/proyectos').then(m => m.Proyectos)
      },
      {
        path: 'experience',
        loadComponent: () =>
          import('./modules/user/experience/experience').then(m => m.Experience)
      }

    ]
  },
  {
    path: '**',
    redirectTo: 'inicio' 
  }
];
