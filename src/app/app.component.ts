import {Component, OnInit} from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'labshare-test';

  constructor(public oidcSecurityService: OidcSecurityService) {
  }

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(({isAuthenticated, userData}) => {
      console.log('isAuthenticated', isAuthenticated);
      console.log('userData', userData);
    });
  }

  login() {
    this.oidcSecurityService.logoff();
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

}
