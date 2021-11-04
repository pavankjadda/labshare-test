import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth/auth.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class HomePageGuard implements CanActivate {
  constructor(private authService: AuthService,
              private cookieService: CookieService,
              private router: Router,
              private oidcSecurityService: OidcSecurityService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.oidcSecurityService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
    return false;
  }
}
