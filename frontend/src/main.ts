import { bootstrapApplication } from '@angular/platform-browser';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core'; 
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { App } from './app/app'; 
import { routes } from './app/app.routes';

const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(), 
    provideHttpClient(),
    provideRouter(routes)
  ]
};

bootstrapApplication(App, appConfig)
  .catch((err) => console.error('Fallo al iniciar Angular:', err));