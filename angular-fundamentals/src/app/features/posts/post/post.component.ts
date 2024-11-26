import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'ios-post-card',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() post?: Post;

  constructor(private router: Router) {}

  goToPost(post: Post) {
    this.router.navigate(['/posts/post', post.id]);
  }

}
