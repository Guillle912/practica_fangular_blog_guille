import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  myForm: FormGroup;
  postsService = inject(PostsService);
  router = inject(Router);


  constructor(){
    this.myForm = new FormGroup({
      titulo: new FormControl( null, Validators.required ),
      texto: new FormControl( null, Validators.required ),
      imagen: new FormControl( null, Validators.required ),
      imagenes: new FormControl(),
      descripcion: new FormControl(),
      fecha: new FormControl( null, Validators.required ),
      categoria: new FormControl( null, Validators.required ),
    })
  }

  /**
   * funcion para validar campos de formulario
   * @param field campo a verificar
   * @returns
   */
  isValidField( field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  async onCreatePost(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched()
      return
    }

    this.postsService.createNewPost( this.myForm.value );
    this.myForm = new FormGroup({
      titulo: new FormControl( null, Validators.required ),
      texto: new FormControl( null, Validators.required ),
      imagen: new FormControl( null, Validators.required ),
      imagenes: new FormControl(),
      descripcion: new FormControl(),
      fecha: new FormControl( null, Validators.required ),
      categoria: new FormControl( null, Validators.required ),
    })
    await Swal.fire({title: 'Post creado', text: 'Has creado un nuevo post', icon: 'success',confirmButtonText: 'Aceptar'})
    this.myForm.reset()
    this.router.navigate(['/home'])

  }
}
