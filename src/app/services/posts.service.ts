import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  arrPosts: Post[] = [];
  constructor() {
    this.arrPosts = [
      {
        titulo: "Super Mario Odyssey",
        texto: "Super Mario Odyssey es un videojuego de plataformas desarrollado y publicado por Nintendo para Nintendo Switch. Es la secuela de Super Mario Galaxy y Super Mario 3D World, y la decimocuarta entrega principal de la serie Super Mario. El juego fue lanzado el 27 de octubre de 2017 en todo el mundo.",
        imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/08/super-mario-odyssey_1.jpg?tf=3840x",
        fecha: "2017-10-27",
        categoria: "Plataformas",
      },
      {
        titulo: "The Legend of Zelda: Breath of the Wild",
        texto: "The Legend of Zelda: Breath of the Wild es un videojuego de acción-aventura desarrollado y publicado por Nintendo para Nintendo Switch. Es la secuela de The Legend of Zelda: Skyward Sword y la decimoquinta entrega principal de la serie The Legend of Zelda. El juego fue lanzado el 3 de marzo de 2017 en todo el mundo.",
        imagen: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg",
        fecha: "2017-03-03",
        categoria: "Acción-aventura",
      },
      {
        titulo: "God of War",
        texto: "God of War es un videojuego de acción-aventura desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment. Es la secuela de God of War III y la octava entrega principal de la serie God of War. El juego fue lanzado el 20 de abril de 2018 para PlayStation 4.",
        imagen: "https://assetsio.reedpopcdn.com/-1634741977375.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
        fecha: "2018-04-20",
        categoria: "Acción-aventura",
      },
      {
        titulo: "Baldur's Gate 3",
        texto: 'Embárcate en una aventura épica de rol en un mundo de fantasía basado en Dungeons & Dragons, tomando decisiones cruciales que moldearán tu historia.',
        imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg',
        fecha: '2023-10-25',
        categoria: 'RPG'
      },
      {
        titulo: "Red Dead Redemption 2",
        texto: "Red Dead Redemption 2 es un videojuego de acción-aventura desarrollado y publicado por Rockstar Games. Es la precuela de Red Dead Redemption, y está ambientado en el oeste de los Estados Unidos durante la era del Salvaje Oeste. El juego fue lanzado el 26 de octubre de 2018 para PlayStation 4 y Xbox One.",
        imagen: "https://compass-ssl.xbox.com/assets/64/02/6402981a-9446-46d8-8289-e370f3158746.jpg?n=Red-Dead-Redemption-II_GLP-Page-Hero-1084_1920x1080.jpg",
        fecha: "2018-10-26",
        categoria: "Acción-aventura",
      },
      {
        titulo: "The Witcher 3: Wild Hunt",
        texto: "The Witcher 3: Wild Hunt es un videojuego de acción-aventura y rol desarrollado por CD Projekt RED y publicado por Warner Bros. Interactive Entertainment. Es la secuela de The Witcher 2: Assassins of Kings y la tercera entrega principal de la serie The Witcher. El juego fue lanzado el 19 de mayo de 2015 para PlayStation 4, Xbox One y Microsoft Windows.",
        imagen: "https://static.cdprojektred.com/thewitcher.com/gfx/witcher3/thumbnail-tw.jpg",
        fecha: "2015-05-19",
        categoria: "Rol",
      },
      {
        titulo: 'Cyberpunk 2077',
        texto: 'Explora Night City en este juego de rol de mundo abierto con una historia inmersiva y gráficos impactantes.',
        imagen: 'https://i.blogs.es/b109e9/cyberpunk2077-johnny-v-rgb_en/1366_2000.jpg',
        fecha: '2023-11-06',
        categoria: 'RPG'
      },
      {
        titulo: 'Hades',
        texto: 'Embárcate en un viaje desafiante a través del inframundo en este juego rogue-like lleno de acción y mitología.',
        imagen: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Hades_image1600w.png',
        fecha: '2023-11-04',
        categoria: 'Acción'
      },
      {
        titulo: 'Animal Crossing: New Horizons',
        texto: 'Crea tu propio paraíso en una isla desierta, interactúa con adorables animales y personaliza tu mundo en este relajante simulador social.',
        imagen: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons_image1600w.jpg',
        fecha: '2023-10-30',
        categoria: 'Simulación'
      },

    ];
  }

  getAllPosts(){
    return this.arrPosts
  }

  getAllImg(){
    return this.arrPosts.map( post => post.imagen )
  }

  filterByCategory(cat: string){
    const category = this.arrPosts.filter( post => post.categoria === cat)
    console.log( category);
    return category
  }

  getCategory(){
    return [...new Set(this.arrPosts.map( post => post.categoria))]
  }
}
