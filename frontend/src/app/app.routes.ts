import { Routes } from '@angular/router';

export const routes: Routes = [


  //rutas del usuario
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
      },
      {
        path: 'social',
        loadComponent: () =>
          import('./modules/user/social/social').then(m => m.Social)
      },
      //rutas del admin
      {
        path: 'dashboard-admin',
        loadComponent: () =>
          import('./modules/admin/dashboard-admin/dashboard-admin').then(m => m.DashboardAdmin)
      },
      {
        path: 'projects-admin',
        loadComponent: () =>
          import('./modules/admin/projects-admin/projects-admin').then(m => m.ProjectsAdmin)
      },
      {
        path: 'experience-admin',
        loadComponent: () =>
          import('./modules/admin/experience-admin/experience-admin').then(m => m.ExperienceAdmin)
      },
      {
        path: 'social-admin',
        loadComponent: () =>
          import('./modules/admin/social-admin/social-admin').then(m => m.SocialAdmin)
      }
      //{
      // path: 'proyectos_admin',
        //loadComponent: () =>
          //import('./modules/admin/proyectos-admin/proyectos-admin').then(m => m.ProyectosAdmin)
      //},

    ]
  },
  {
    path: '**',
    redirectTo: 'inicio' 
  },

];
