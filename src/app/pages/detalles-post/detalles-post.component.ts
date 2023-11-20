import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-detalles-post',
  templateUrl: './detalles-post.component.html',
  styleUrls: ['./detalles-post.component.css']
})
export class DetallesPostComponent {
  post: Post[] = [];
  activatedRoute = inject(ActivatedRoute);
  postsService = inject(PostsService);
  postTitulo: string = '';

  /**
   *
   * @param titulo titulo del post, necesario para caragar los detalles de la pagina
   */
  cargarPost(titulo:string){
    this.post = this.postsService.getByTitle(titulo);
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe( params => {
      this.postTitulo = params['post']
    })
    this.cargarPost(this.postTitulo)
  }
}
