import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { NgIf } from '@angular/common';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeferBlockBehavior } from '@angular/core/testing';

@Component({
  selector: 'ios-post-detail',
  imports: [NgIf],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {

  post?: Post = undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const postId = params['id'];
      if (postId) {
        fetch('https://dummyjson.com/posts/' + postId).then(response => {
          return response.json();
        }).then((result) => {
          this.post = result;
        }).catch((err) => {
          console.error(err);
        });
      }
    });
  }


}
