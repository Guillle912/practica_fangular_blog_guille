import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent {
  arrPosts: Post[] = [];

  postsService = inject(PostsService);

  constructor(){
    this.arrPosts = this.postsService.getAllPosts();
  }
}
