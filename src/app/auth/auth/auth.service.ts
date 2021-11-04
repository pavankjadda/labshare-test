import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {OidcSecurityService} from 'angular-auth-oidc-client';

/**
 * A Service the provides methods to Login User and store user information
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public static status: number;
  public redirectUrl = '';

  constructor(private httpClient: HttpClient,
              private router: Router,
              private oidcSecurityService: OidcSecurityService,
  ) {
  }


  isUserLoggedIn(): boolean {
    return this.oidcSecurityService.isAuthenticated()
    //return this.oauthService.hasValidIdToken();
    //return this.cookieService.get('isLoggedIn') === 'true' && this.cookieService.check('X-Auth-Token');
  }
}
