import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthConfigModule} from './auth/auth-config.module';
import {AppRoutingModule} from './auth/app-routing.module';
import { HomeComponent } from './home/home.component';
import {httpInterceptorProviders} from './auth/intercepters/http-interceptor-providers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AuthConfigModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
