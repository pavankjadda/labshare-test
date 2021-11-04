import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';

/**
 * HTTP Error Interceptor that intercepts all errors from backend
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {
  }

  /**
   * Intercepts all HTTP methods for errors
   *
   * @param request HTTPRequest object
   * @param next HTTPHandler Object
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
        AuthService.status = err.status;
        if (err.status === 401) {
          console.log('Inside ErrorInterceptor, Http Status: 401');

          //Save current URL
          if (this.router.url !== '/login') {
            this.authService.redirectUrl = this.router.url;
          }

          //Delete all cookies
          this.router.navigate(['/login']);
        }
        if (err.status === 403) {
          console.log('Inside ErrorInterceptor, Http Status: 403');
          this.router.navigate(['/unauthorized']);
        }

        if (err.status === 404) {
          console.log('Requested URL can not be found. HTTP STATUS: 404');
        }
        if (err.status === 500) {
          console.log('Internal server error occurred, Http Status: 500');
        }

        if (err.status === 0 || err.statusText === 'Unknown Error') {
          console.log('Inside ErrorInterceptor, Http Status: Unknown Error and error: ' + err);
          this.router.navigate(['/error']);
        }

        //let error = err.error.message || err.error;
        return throwError(err.error);
      })
    );
  }
}
