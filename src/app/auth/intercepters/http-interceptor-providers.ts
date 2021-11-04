import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './error.interceptor';
import { HttpTokenInterceptor } from './http-token.interceptor';

/**
 * Http interceptor providers in outside-in order
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpTokenInterceptor,
    multi: true
  }
];
