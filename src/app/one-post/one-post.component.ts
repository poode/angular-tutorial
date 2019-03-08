import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../shared/services/post.service';
import { Post } from '../shared/models/post';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {
  subscriber: Subscription;
  id: number;
  // post: Post;
  post = new Post(0, 0, '','');


  constructor(private postService: PostService,private router: ActivatedRoute) {
    if(!this.postService.getSelectedPost()){
      this.router.params.subscribe(params => {
        this.id = params['id'];
        this.subscriber = this.postService.getPostById(this.id).subscribe(postFromService => {
          this.post = postFromService;
        });
      });
    }
    else {
      this.post = this.postService.getSelectedPost();
    }

  }

  ngOnInit() {
    // this.subscriber = this.postService.getPostById(this.id).subscribe(postFromService => {
    //   console.log(postFromService);
    //   this.post = postFromService;
    // });
    
  }



}
