import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from './shared/services/post.service';
import { Post } from './shared/models/post';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy  {
  title = 'shard-angular';
  postList: Post[];
  subscriber: Subscription;

  constructor(private postService: PostService) {
    
  }

  ngOnInit(): void {
    this.postListFromService();
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

  postListFromService() {
    this.subscriber = this.postService.getPostList().subscribe(list => {
      this.postList = list;
    });
  }



}
