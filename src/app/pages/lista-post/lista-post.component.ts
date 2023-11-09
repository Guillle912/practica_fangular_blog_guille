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
  arrCategoria: string[] = [];

  postsService = inject(PostsService);

  constructor(){
    this.arrPosts = this.postsService.getAllPosts();
    this.arrCategoria = this.postsService.getCategory()
  }


  filterByCategory( $event: any ){
    if($event.target.value === 'todos'){
      this.arrPosts = this.postsService.getAllPosts()
    }else{
      this.arrPosts = this.postsService.filterByCategory( $event.target.value );
      console.log( this.arrPosts)

    }
  }
}
