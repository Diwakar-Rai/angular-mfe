import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { NOTES_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(NOTES_ROUTES)],
};
