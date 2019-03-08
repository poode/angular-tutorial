import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostService } from './shared/services/post.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OnePostComponent } from './one-post/one-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from './shared/shared.module';
import { PostFromQueryComponent } from './post-from-query/post-from-query.component';

@NgModule({
  declarations: [
    AppComponent,
    OnePostComponent,
    PostListComponent,
    PostFromQueryComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
