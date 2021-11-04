import {NgModule} from '@angular/core';
import {AuthModule, LogLevel} from 'angular-auth-oidc-client';
import {CustomStorage} from './custom-storage';
import { AuthCallbackComponent } from './auth-callback/auth-callback/auth-callback.component';


@NgModule({
  imports: [AuthModule.forRoot({
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
  })],
  exports: [AuthModule],
  providers: [],
  declarations: [
    AuthCallbackComponent
  ]
})
export class AuthConfigModule {
}
