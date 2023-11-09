import { Component, Input, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  imagenSeleccionada: number = 0;
  arrImagenes: string[] = [];
  postService = inject(PostsService)

  constructor(){
    this.arrImagenes = this.postService.getAllImg();
  }
  modificarImagen( incremento: boolean){
    if(incremento){
      this.imagenSeleccionada++;
    }else{
      this.imagenSeleccionada--;
    }
  }
}
