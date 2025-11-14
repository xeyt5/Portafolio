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

    ]
  },
  {
    path: '**',
    redirectTo: 'inicio' // redirección en caso de ruta no encontrada
  }
];
