import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnePostComponent } from './one-post/one-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostFromQueryComponent } from './post-from-query/post-from-query.component';

const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  { path: 'post', component: PostListComponent},
  { path: 'post/:id', component: OnePostComponent},
  { path: 'one-post', component: PostFromQueryComponent},
  // { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
