import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'ios-posts',
  imports: [
    CommonModule,
    PostComponent
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  ngOnInit() {
    //read posts from the server
    fetch('https://dummyjson.com/posts?limit=10').then(response => {
        return response.json();
    }).then((result) => {
      console.log(result);
      this.posts = result.posts;
    }).catch((err) => {
      console.log(err);      
    });
  }
}
