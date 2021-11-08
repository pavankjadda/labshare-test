import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './auth/app-routing.module';
import {HomeComponent} from './home/home.component';
import {httpInterceptorProviders} from './auth/intercepters/http-interceptor-providers';
import {AuthModule, LogLevel} from 'angular-auth-oidc-client';
import {CustomStorage} from './auth/custom-storage';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      config: {
        authority: 'https://a.labshare.org/_api/auth/NCI-CCR',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: '0_AbvYXBiY2df9jHRDhcw',
        scope: 'openid profile', // 'openid profile offline_access ' + your scopes
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30,
        logLevel: LogLevel.Debug,
        storage: new CustomStorage()
      }
    }),
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
