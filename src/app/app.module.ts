import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostsCardComponent } from './components/posts-card/posts-card.component';
import { ListaPostComponent } from './pages/lista-post/lista-post.component';
import { NewPostComponent } from './pages/new-post/new-post.component';
import { DetallesPostComponent } from './pages/detalles-post/detalles-post.component';
import { GaleriaComponent } from './components/galeria/galeria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    PostsCardComponent,
    ListaPostComponent,
    NewPostComponent,
    DetallesPostComponent,
    GaleriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
