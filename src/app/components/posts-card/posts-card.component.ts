import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.css']
})
export class PostsCardComponent {
  @Input() posts!: Post;
}
