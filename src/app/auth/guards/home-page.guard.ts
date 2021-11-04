import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../auth/auth.service';
import {OidcSecurityService} from 'angular-auth-oidc-client';

@Injectable({
  providedIn: 'root'
})
export class HomePageGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private oidcSecurityService: OidcSecurityService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.oidcSecurityService.isAuthenticated();
  }
}
