import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: (await import('./layout/main-layout/main-layout')).MainLayout, // 👈 se carga el layout
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
