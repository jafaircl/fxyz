import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: 'app/post-list/post-list.module#PostListModule'
  }, {
    path: 'posts',
    redirectTo: '',
    pathMatch: 'full'
  }, {
    path: 'posts/:slug',
    loadChildren: 'app/post-detail/post-detail.module#PostDetailModule'
  }, {
    path: '404',
    loadChildren: 'app/four-o-four/four-o-four.module#FourOFourModule'
  }, {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
