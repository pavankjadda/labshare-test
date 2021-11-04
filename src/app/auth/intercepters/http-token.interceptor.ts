import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../auth/auth.service';
import {OidcSecurityService} from 'angular-auth-oidc-client';

/**
 * HTTP Token Interceptor that intercepts all requests HTTP requests and attaches X-Auth-Token of the User session
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService,
              private oidcSecurityService: OidcSecurityService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.oidcSecurityService.getAccessToken();
    console.log('token', token);
    request = request.clone(
      {
        setHeaders: {
          'Authorization': 'Bearer ' + token
        }
      });
    return next.handle(request);
  }
}
