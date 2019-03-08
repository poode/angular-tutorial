import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../shared/models/post';

@Component({
  selector: 'app-post-from-query',
  templateUrl: './post-from-query.component.html',
  styleUrls: ['./post-from-query.component.css']
})
export class PostFromQueryComponent implements OnInit {
  post = new Post(0,0,'','');
  id: number;
  constructor(private postService: PostService,private router: ActivatedRoute) { 
    this.router.queryParams.subscribe(params => {
      this.id = params['id'];      
    });
  }

  ngOnInit() {
    this.postService.getPostById(this.id).subscribe(postFromService => {
      this.post = postFromService;
    })
  }

}
