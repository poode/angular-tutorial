import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../shared/models/post';
import { Subscription } from 'rxjs';
import { PostService } from '../shared/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
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

  getPost(post: Post) {
    this.postService.setPost(post);
  }

}
