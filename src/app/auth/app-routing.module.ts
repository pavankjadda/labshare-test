import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate: [AutoLoginAllRoutesGuard]
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
