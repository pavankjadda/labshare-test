import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AutoLoginPartialRoutesGuard} from 'angular-auth-oidc-client';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AutoLoginPartialRoutesGuard]
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'welcome',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules,
    enableTracing: false
  })],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
