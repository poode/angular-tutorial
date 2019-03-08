import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from '../models/post';

@Injectable()
export class PostService {
  selectedPost: Post;
  constructor(private http: HttpClient) { }

  getPostList() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }

  setPost(post: Post) {
    this.selectedPost = post;
  }

  getSelectedPost() {
    return this.selectedPost;
  }

}
