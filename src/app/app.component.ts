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
    this.login();
  }

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe(({isAuthenticated}) => {
      if (!isAuthenticated)
      {
        console.log('not authenticated');
      }
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff();
  }
}
