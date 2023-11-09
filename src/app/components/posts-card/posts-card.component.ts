import { Component, Input, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.css']
})
export class PostsCardComponent {
  @Input() posts!: Post;
  postsService = inject(PostsService);

  onDeletePost( titulo: string ){
    console.log(titulo);
    this.postsService.deletePost( titulo)
  }
}
