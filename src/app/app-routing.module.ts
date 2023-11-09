import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostComponent } from './pages/lista-post/lista-post.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { DetallesPostComponent } from './pages/detalles-post/detalles-post.component';

const routes: Routes = [
  { path: '',pathMatch: 'full' ,redirectTo: '/home' },
  { path: 'home', component: ListaPostComponent },
  { path: 'home/:post', component: DetallesPostComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
