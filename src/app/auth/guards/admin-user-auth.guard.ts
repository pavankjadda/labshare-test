import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminUserAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if (this.authService.isUserLoggedIn() && this.authService.hasSysAdminRole()) {
      return true;
    }
    if (this.authService.isUserLoggedIn() && !this.authService.hasSysAdminRole()) {
      this.router.navigate(['/unauthorized']);
    }
    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return false;
  }
}
