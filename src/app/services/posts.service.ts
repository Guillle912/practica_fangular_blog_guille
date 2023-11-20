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
        categoria: "Plataformas, Aventuras ",
        descripcion:`<h2>"Super Mario Odyssey" es un videojuego de plataformas desarrollado y publicado por Nintendo para la consola Nintendo Switch. Fue lanzado en octubre de 2017 y se convirtió en uno de los títulos más destacados de la plataforma. Aquí tienes una descripción general de sus características clave:

        Mundo Abierto y Exploración:</h2>

        <p>"Super Mario Odyssey" presenta un diseño de mundo abierto no lineal, permitiendo a los jugadores explorar diversos reinos llenos de secretos y desafíos. Cada reino tiene su propio tema único, desde desiertos hasta ciudades modernas y mundos surrealistas.
        Sombrero Mágico:</p>

        La principal novedad en el juego es la inclusión del sombrero mágico llamado Cappy. Mario puede lanzar su sombrero para poseer y tomar el control de diversos objetos y enemigos, lo que agrega una nueva capa de jugabilidad y resuelve puzles de manera única.
        Viaje alrededor del Mundo:

        La trama sigue a Mario mientras viaja por diferentes reinos en su nave, la Odyssey, para rescatar a la Princesa Peach, quien ha sido secuestrada por Bowser. Este viaje lleva a Mario a través de una variedad de entornos y situaciones creativas.
        Niveles Detallados y Diseño Visual:

        Cada nivel está cuidadosamente diseñado con detalles visuales y mecánicas de juego únicas. El juego aprovecha la potencia de la Nintendo Switch para ofrecer gráficos coloridos y vibrantes.
        Cambio de Trajes y Habilidades Especiales:

        Mario puede adquirir una variedad de trajes y sombreros especiales que no solo cambian su apariencia sino también sus habilidades. Algunos trajes permiten a Mario interactuar con el entorno de nuevas maneras, lo que añade versatilidad a la jugabilidad.
        Captura de Enemigos y Objetos:

        Utilizando su sombrero Cappy, Mario puede capturar enemigos y objetos para aprovechar sus habilidades especiales. Esto se convierte en una parte central de la jugabilidad y ofrece una variedad de estrategias para abordar los desafíos.
        Música Encantadora:

        La banda sonora del juego presenta melodías pegajosas y encantadoras que complementan perfectamente la experiencia de juego, adaptándose al tono y ambiente de cada reino.
        Jugabilidad Innovadora:

        "Super Mario Odyssey" se destaca por su enfoque innovador en la jugabilidad, incorporando nuevas mecánicas y giros a la fórmula clásica de los juegos de Mario. La combinación de elementos de plataformas tradicionales con las nuevas capacidades del sombrero Cappy aporta frescura y creatividad al juego.
        En resumen, "Super Mario Odyssey" es elogiado por su diseño de nivel creativo, su jugabilidad innovadora y su capacidad para mantener la esencia clásica de los juegos de Mario mientras introduce nuevas ideas frescas y emocionantes.`,
        imagenes: ['https://img.europapress.es/fotoweb/fotonoticia_20180222131450_640.jpg', 'https://i.blogs.es/d60ef0/super-mario-odyssey-cabecera/840_560.jpg']
      },
      {
        titulo: "The Legend of Zelda: Breath of the Wild",
        texto: "The Legend of Zelda: Breath of the Wild es un videojuego de acción-aventura desarrollado y publicado por Nintendo para Nintendo Switch. Es la secuela de The Legend of Zelda: Skyward Sword y la decimoquinta entrega principal de la serie The Legend of Zelda. El juego fue lanzado el 3 de marzo de 2017 en todo el mundo.",
        imagen: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild_image1600w.jpg",
        fecha: "2017-03-03",
        categoria: "Acción-aventura, RPG",
        descripcion:`"The Legend of Zelda: Breath of the Wild" es un videojuego de acción y aventuras desarrollado y publicado por Nintendo. Lanzado en marzo de 2017 como título de lanzamiento para la consola Nintendo Switch, también está disponible para la consola Wii U. Aquí tienes una descripción general de sus características clave:

        Mundo Abierto y Exploración:

        "Breath of the Wild" se destaca por su vasto mundo abierto, conocido como Hyrule. Los jugadores tienen la libertad de explorar todo el reino, desde montañas nevadas hasta extensos campos y bosques. La exploración es alentada y recompensada, con una gran cantidad de secretos, misiones secundarias y desafíos esparcidos por el mundo.
        Física Interactiva:

        El juego presenta un sistema de física interactivo que permite a los jugadores utilizar el entorno de maneras creativas. Pueden rodar rocas por colinas, crear puentes improvisados con maderas y usar el clima y el fuego para resolver puzles.
        Clima Dinámico y Ciclo de Día y Noche:

        Hyrule experimenta cambios climáticos realistas y un ciclo completo de día y noche. Esto afecta tanto al entorno como a las estrategias de juego, ya que el clima puede influir en el comportamiento de los enemigos y en la eficacia de ciertas tácticas.
        Arte Celular y Estilo Visual:

        El juego presenta un impresionante estilo visual de arte celular que le otorga un aspecto único y hermoso. Los paisajes y personajes están diseñados con gran detalle, creando un mundo cautivador.
        Libertad en la Resolución de Problemas:

        "Breath of the Wild" fomenta la resolución creativa de problemas. Los jugadores tienen una amplia variedad de herramientas y habilidades, como el paravela, la magnesis y las bombas, para abordar desafíos de diferentes maneras.
        Combate y Armas:

        El juego presenta un sistema de combate dinámico. Los jugadores pueden usar una variedad de armas, como espadas, arcos y lanzas, y enfrentarse a una variedad de enemigos, desde pequeños goblins hasta imponentes jefes.
        Habilidades y Mejoras:

        A medida que los jugadores avanzan, obtienen habilidades especiales llamadas "Campeones", que les otorgan ventajas en el combate y la exploración. También pueden mejorar su salud y resistencia al completar santuarios repartidos por todo el mundo.
        Historia Inmersiva:

        La narrativa sigue a Link en su misión para derrotar a Ganon y salvar a la Princesa Zelda. La historia se presenta de manera no lineal, permitiendo que los jugadores exploren la trama a su propio ritmo.
        Recepción Crítica y Premios:

        "Breath of the Wild" recibió aclamación universal de la crítica y ganó numerosos premios, incluido el premio al Juego del Año en varios eventos de la industria de los videojuegos.
        En resumen, "The Legend of Zelda: Breath of the Wild" es conocido por su mundo abierto expansivo, su enfoque en la exploración y la resolución creativa de problemas, su diseño visual impresionante y su capacidad para ofrecer una experiencia de juego inmersiva y emocionante.




        `,
        imagenes: ['https://www.nintenderos.com/wp-content/uploads/2021/04/breath-wild-ya-es-zelda-mas-vendido-historia.jpg','https://i.blogs.es/15da49/zelda00/1366_2000.jpg']
      },
      {
        titulo: "God of War",
        texto: "God of War es un videojuego de acción-aventura desarrollado por Santa Monica Studio y publicado por Sony Interactive Entertainment. Es la secuela de God of War III y la octava entrega principal de la serie God of War. El juego fue lanzado el 20 de abril de 2018 para PlayStation 4.",
        imagen: "https://assetsio.reedpopcdn.com/-1634741977375.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp",
        fecha: "2018-04-20",
        categoria: "Acción-aventura",
        descripcion:`
        "God of War III" es un videojuego de acción y aventuras desarrollado por Santa Monica Studio y publicado por Sony Computer Entertainment. Este título, lanzado originalmente en marzo de 2010 para la consola PlayStation 3, forma parte de la popular serie "God of War". Aquí tienes una descripción general de sus características clave:

        Acción Épica y Violenta:

        "God of War III" se destaca por su intensa acción y combate cuerpo a cuerpo. Los jugadores controlan a Kratos, el protagonista, un guerrero espartano impulsado por la venganza, mientras lucha contra poderosos enemigos y dioses del panteón griego.
        Gráficos y Diseño Visual:

        El juego fue aclamado por sus impresionantes gráficos y diseño visual. Los escenarios son épicos y detallados, y los modelados de personajes están cuidadosamente elaborados, creando una experiencia visual impresionante.
        Mitología Griega:

        La historia está ambientada en la mitología griega, donde Kratos busca venganza contra los dioses del Olimpo, quienes lo han traicionado. A lo largo del juego, los jugadores interactúan con personajes y criaturas mitológicas icónicas.
        Combate Brutal y Poderes Sobrenaturales:

        Kratos utiliza sus Espadas del Caos, un par de cuchillas unidas a cadenas, para realizar combos devastadores. Además, a lo largo del juego, obtiene nuevos poderes y armas que le otorgan habilidades sobrenaturales, lo que amplía la variedad de su estilo de combate.
        Puzles y Plataformas:

        Además de la acción intensa, el juego presenta secciones de puzles y plataformas que requieren la resolución de acertijos y la navegación a través de entornos desafiantes.
        Jefe Finales Imponentes:

        "God of War III" es conocido por sus impresionantes batallas contra jefes finales. Estas luchas colosales implican enfrentarse a criaturas míticas y dioses poderosos, proporcionando momentos épicos y emocionantes.
        Narrativa Intensa:

        La historia de "God of War III" es oscura y llena de tragedia, centrada en la búsqueda de Kratos para vengarse de los dioses que lo han traicionado. La narrativa, combinada con cinemáticas impactantes, crea una experiencia inmersiva.
        Lanzamiento en Consolas Posteriores:

        Después de su lanzamiento original en PlayStation 3, "God of War III" fue remasterizado para PlayStation 4 como parte de la "God of War III Remastered", ofreciendo gráficos mejorados y un rendimiento más fluido en la consola de nueva generación.
        En resumen, "God of War III" es reconocido por su acción frenética, su narrativa intensa y su impresionante diseño visual, consolidando la posición de Kratos como uno de los personajes más icónicos en el mundo de los videojuegos.`,
        imagenes: ['https://i.blogs.es/23b32a/0000/1366_2000.jpeg','https://i.blogs.es/bc122f/god-of-war-ragnarok-golpe-escudo/1366_2000.jpeg']
      },
      {
        titulo: "Baldur's Gate 3",
        texto: 'Embárcate en una aventura épica de rol en un mundo de fantasía basado en Dungeons & Dragons, tomando decisiones cruciales que moldearán tu historia.',
        imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202302/2321/3098481c9164bb5f33069b37e49fba1a572ea3b89971ee7b.jpg',
        fecha: '2023-10-25',
        categoria: 'RPG, Rol',
        descripcion:`"Baldur's Gate 3" es un videojuego de rol (RPG) desarrollado y publicado por Larian Studios. Lanzado en acceso anticipado en octubre de 2020, el juego está basado en el universo de Dungeons & Dragons y sirve como la tercera entrega de la serie "Baldur's Gate". Aquí tienes una descripción general de sus características principales:

        Universo Dungeons & Dragons:

        El juego se basa en las reglas y el mundo de Dungeons & Dragons, una franquicia de juegos de rol de mesa. Esto incluye la utilización de dados y sistemas de reglas específicos, así como la incorporación de criaturas, razas y magia características del universo de D&D.
        Historia y Ambientación:

        La trama se desarrolla en el mundo ficticio de Faerûn y sigue a los jugadores en una épica búsqueda para enfrentarse a una amenaza cósmica conocida como el "Cerebro Fragmentado". La narrativa está llena de decisiones significativas que afectan el desarrollo de la historia y las relaciones entre los personajes.
        Personajes Jugables y Compañeros:

        Los jugadores pueden crear su propio personaje, eligiendo entre diferentes razas y clases, cada una con habilidades únicas. También pueden reclutar a compañeros de viaje con sus propias historias, personalidades y objetivos.
        Jugabilidad Táctica:

        El juego presenta una jugabilidad táctica por turnos. Durante los combates, los jugadores y sus enemigos tienen turnos para realizar acciones, lo que permite una planificación estratégica y táctica.
        Exploración y Mundo Abierto:

        "Baldur's Gate 3" presenta un mundo abierto rico y detallado que los jugadores pueden explorar libremente. Hay ciudades, mazmorras, y entornos variados llenos de secretos, misiones y encuentros.
        Interacción y Elecciones:

        La interacción con los personajes no jugables (PNJ) y la toma de decisiones tienen un impacto significativo en la historia y el desarrollo del personaje. Las opciones de diálogo y las acciones influyen en la percepción que tienen otros personajes de ti y en cómo se desarrollan los eventos.
        Gráficos y Diseño Artístico:

        El juego cuenta con gráficos detallados y un diseño artístico impresionante que captura la esencia del universo de Dungeons & Dragons. Los entornos y personajes están diseñados con gran atención al detalle.
        Acceso Anticipado y Actualizaciones:

        "Baldur's Gate 3" fue lanzado en acceso anticipado para permitir a los jugadores experimentar y proporcionar comentarios para mejorar el juego antes del lanzamiento completo. Larian Studios ha estado lanzando actualizaciones periódicas para añadir contenido y mejorar la experiencia del jugador.
        En resumen, "Baldur's Gate 3" ha sido elogiado por su fidelidad al universo de Dungeons & Dragons, su narrativa rica y sus mecánicas de juego tácticas. A medida que continúa su desarrollo en acceso anticipado, se espera que ofrezca aún más contenido y mejoras.`,
        imagenes: ['https://articles-img.sftcdn.net/f_auto,t_article_cover_l/auto-mapping-folder/sites/2/2023/07/baldurs-gate-creator.jpg','https://www.nme.com/wp-content/uploads/2023/08/Baldurs-Gate-3-which-class-to-play.jpg']
      },
      {
        titulo: "Red Dead Redemption 2",
        texto: "Red Dead Redemption 2 es un videojuego de acción-aventura desarrollado y publicado por Rockstar Games. Es la precuela de Red Dead Redemption, y está ambientado en el oeste de los Estados Unidos durante la era del Salvaje Oeste. El juego fue lanzado el 26 de octubre de 2018 para PlayStation 4 y Xbox One.",
        imagen: "https://compass-ssl.xbox.com/assets/64/02/6402981a-9446-46d8-8289-e370f3158746.jpg?n=Red-Dead-Redemption-II_GLP-Page-Hero-1084_1920x1080.jpg",
        fecha: "2018-10-26",
        categoria: "Westerm, RPG",
        descripcion:`"Red Dead Redemption 2" es un videojuego de acción y aventuras desarrollado por Rockstar Games. Lanzado en octubre de 2018 para PlayStation 4, Xbox One y Microsoft Windows, es la secuela de "Red Dead Redemption" y está ambientado en el Salvaje Oeste americano a fines del siglo XIX. A continuación, se describen algunas de las características más destacadas:

        Historia Épica:

        La trama sigue a Arthur Morgan, un forajido y miembro de la banda Van der Linde liderada por Dutch van der Linde. La historia se desarrolla en un período de agitación y cambios en el Salvaje Oeste, mientras las fuerzas de la ley y la civilización se ciernen sobre los forajidos.
        Mundo Abierto Expansivo:

        El juego presenta un vasto mundo abierto que abarca diversos paisajes, desde montañas nevadas hasta pantanos y praderas. Cada región está llena de vida salvaje, pueblos, ciudades y encuentros aleatorios que contribuyen a la sensación de un mundo dinámico y realista.
        Libertad de Elección:

        Los jugadores tienen una gran libertad para explorar el mundo, realizar misiones secundarias y participar en actividades diversas, como la caza, la pesca y el juego. Las decisiones del jugador afectan la moral de la banda y pueden influir en el desarrollo de la historia.
        Personajes Complejos:

        "Red Dead Redemption 2" presenta una amplia variedad de personajes, cada uno con su propia personalidad, historia y motivaciones. La interacción con los miembros de la banda y otros personajes en el mundo contribuye a la inmersión en la historia.
        Detalles y Realismo:

        El juego destaca por su atención al detalle y realismo en la representación del entorno y las interacciones. Los ciclos de día y noche, las condiciones climáticas cambiantes y la vida silvestre contribuyen a la autenticidad del mundo del juego.
        Sistemas de Supervivencia y Progresión del Personaje:

        Los jugadores deben gestionar la salud, la resistencia y la moral de Arthur. Además, pueden mejorar las habilidades del personaje, personalizar su equipo y cuidar de su caballo, que se convierte en un compañero crucial.
        Multijugador:

        "Red Dead Online" es el componente multijugador en línea del juego, que permite a los jugadores explorar el mundo junto con otros jugadores, participar en actividades y misiones cooperativas, y personalizar a sus propios forajidos.
        En general, "Red Dead Redemption 2" ha sido ampliamente elogiado por su narrativa envolvente, su mundo inmersivo y sus personajes memorables. Es considerado como uno de los logros más destacados en el género de los videojuegos de mundo abierto.`,
        imagenes: ['https://www.muycomputer.com/wp-content/uploads/2021/07/Red-Dead-Redemption-2-portada.jpg', 'https://www.lavanguardia.com/files/article_main_microformat/uploads/2018/10/25/5fa44972652cd.jpeg']
      },
      {
        titulo: "The Witcher 3: Wild Hunt",
        texto: "The Witcher 3: Wild Hunt es un videojuego de acción-aventura y rol desarrollado por CD Projekt RED y publicado por Warner Bros. Interactive Entertainment. Es la secuela de The Witcher 2: Assassins of Kings y la tercera entrega principal de la serie The Witcher. El juego fue lanzado el 19 de mayo de 2015 para PlayStation 4, Xbox One y Microsoft Windows.",
        imagen: "https://static.cdprojektred.com/thewitcher.com/gfx/witcher3/thumbnail-tw.jpg",
        fecha: "2015-05-19",
        categoria: "Rol, RPG, Acción-aventura",
        descripcion:`"The Witcher 3: Wild Hunt" es un videojuego de rol de acción desarrollado y publicado por CD Projekt. Lanzado en mayo de 2015, es la tercera entrega de la serie "The Witcher" y se basa en las novelas del autor polaco Andrzej Sapkowski. Aquí tienes una descripción general de algunas de las características clave del juego:

        Mundo Abierto y Exploración:

        El juego se desarrolla en un vasto mundo abierto lleno de ciudades, pueblos, bosques, montañas y mares. Los jugadores pueden explorar libremente este extenso paisaje mientras realizan misiones principales y secundarias.
        Narrativa Compleja y Ramificada:

        La historia sigue al cazador de monstruos Geralt de Rivia, quien busca a su hija adoptiva Ciri, perseguida por una misteriosa fuerza llamada la Cacería Salvaje. La narrativa se caracteriza por su complejidad, con decisiones que afectan el desarrollo de la trama y el destino de los personajes.
        Personajes Memorables:

        "The Witcher 3" presenta una amplia variedad de personajes, cada uno con su propia historia, motivaciones y personalidad única. La interacción con estos personajes a menudo tiene consecuencias significativas en el mundo del juego.
        Combate Estratégico:

        El juego incluye un sistema de combate en tercera persona que combina elementos de acción y estrategia. Geralt puede utilizar una variedad de armas y magias, así como realizar ataques especiales y contraataques.
        Caza de Monstruos y Alquimia:

        Como brujo, Geralt es un experto en la caza de monstruos. Los jugadores deben prepararse adecuadamente para enfrentarse a diferentes criaturas, utilizando pociones, aceites y bombas. La alquimia juega un papel clave en la preparación para los combates.
        Personalización y Progresión:

        Los jugadores pueden personalizar a Geralt, mejorando sus habilidades, adquiriendo nuevas armas y armaduras, y desarrollando su estilo de combate preferido. La toma de decisiones también afecta al desarrollo del personaje y al mundo circundante.
        Gráficos y Diseño Visual:

        "The Witcher 3" se destaca por su impresionante diseño visual y gráficos detallados. Los entornos son visualmente ricos, desde ciudades bulliciosas hasta paisajes naturales pintorescos.
        Contenido Adicional:

        El juego ha recibido expansiones notables, como "Hearts of Stone" y "Blood and Wine", que agregan nuevas regiones, misiones y horas de juego.
        En general, "The Witcher 3: Wild Hunt" ha sido aclamado por la crítica y la comunidad de jugadores por su narrativa envolvente, su mundo expansivo, sus personajes memorables y su atención al detalle. Es considerado uno de los mejores juegos de rol de la última década.`,
        imagenes: ['https://estaticos-cdn.prensaiberica.es/clip/a8bf7777-aaea-4556-a10a-2a872695b0a1_16-9-discover-aspect-ratio_default_0.jpg','https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/12/14/16710075064111.jpg']
      },
      {
        titulo: 'Cyberpunk 2077',
        texto: 'Explora Night City en este juego de rol de mundo abierto con una historia inmersiva y gráficos impactantes.',
        imagen: 'https://i.blogs.es/b109e9/cyberpunk2077-johnny-v-rgb_en/1366_2000.jpg',
        fecha: '2023-11-06',
        categoria: 'RPG, Shooter',
        descripcion:`"Cyberpunk 2077" es un videojuego de rol de acción desarrollado y publicado por CD Projekt, lanzado en diciembre de 2020 para diversas plataformas, incluyendo Microsoft Windows, PlayStation 4, Xbox One y Google Stadia. El juego también fue lanzado posteriormente para las consolas de nueva generación, PlayStation 5 y Xbox Series X/S.

        Principales características de "Cyberpunk 2077":

        Ambientación y Mundo Abierto:

        El juego está ambientado en Night City, una metrópolis futurista y distópica obsesionada con el consumismo, la tecnología y la violencia.
        Night City es un mundo abierto extenso y detallado, dividido en seis distritos diferentes, cada uno con su propia personalidad, cultura y desafíos.
        Historia y Personajes:

        La trama sigue la historia de V, un mercenario personalizable cuyo objetivo principal es alcanzar la inmortalidad.
        El juego presenta una historia profunda y ramificada con decisiones significativas que afectan el desarrollo del personaje y la trama.
        Estilo Cyberpunk:

        Inspirado en el género cyberpunk, el juego presenta una estética futurista, con implantes cibernéticos, tecnología avanzada, y una sociedad marcada por la desigualdad y la corrupción.
        Exploración y Misiones:

        Los jugadores pueden explorar Night City a pie o en vehículos, participar en misiones principales y secundarias, y descubrir secretos en un entorno vasto y diverso.
        Personalización del Personaje:

        Los jugadores pueden personalizar a V, desde su apariencia hasta sus habilidades y elecciones de diálogo.
        La mejora de habilidades incluye la instalación de implantes cibernéticos para mejorar las capacidades del personaje.
        Combate y Habilidades:

        El juego presenta un sistema de combate en primera persona que incluye tiroteos, combate cuerpo a cuerpo y el uso de habilidades especiales y dispositivos tecnológicos.
        Los jugadores pueden elegir entre diferentes estilos de juego, como sigilo, fuerza bruta o hackeo.
        Problemas de Lanzamiento:

        Aunque esperado con gran anticipación, el lanzamiento de "Cyberpunk 2077" estuvo marcado por problemas técnicos y errores en varias plataformas, lo que llevó a CD Projekt a emitir parches y actualizaciones para mejorar la experiencia del jugador.
        A pesar de los problemas de lanzamiento, "Cyberpunk 2077" ha sido elogiado por su historia, personajes, diseño del mundo y la atención al detalle en la representación del género cyberpunk. Sin embargo, las críticas también se centraron en los problemas técnicos iniciales. El juego ha experimentado mejoras significativas a través de actualizaciones posteriores.`,
        imagenes: ['https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/12/cyberpunk-2077-2169779.jpg?tf=3840x','https://img.remediosdigitales.com/172105/cyberpunk-2077/1366_2000.jpeg']
      },
      {
        titulo: 'Hades',
        texto: 'Embárcate en un viaje desafiante a través del inframundo en este juego rogue-like lleno de acción y mitología.',
        imagen: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Hades_image1600w.png',
        fecha: '2023-11-04',
        categoria: 'Acción, Rol',
        descripcion:`"Hades" es un videojuego de acción roguelike desarrollado por Supergiant Games.
         Fue lanzado inicialmente en acceso anticipado en diciembre de 2018 y se lanzó oficialmente en septiembre de 2020 para Microsoft Windows, macOS y Nintendo Switch.
         Posteriormente, se lanzó en otras plataformas, como PlayStation y Xbox.

        Características principales de "Hades":

        Género y Jugabilidad:

        Roguelike de Acción: "Hades" pertenece al género roguelike, donde los jugadores exploran mazmorras generadas aleatoriamente, enfrentándose a enemigos y jefes. Cada vez que el jugador muere,
        regresa al inicio y debe mejorar sus habilidades y equipo para avanzar más lejos en el siguiente intento.
        Combate Dinámico: El juego presenta un sistema de combate rápido y estratégico.
        Los jugadores pueden elegir entre una variedad de armas divinas y habilidades otorgadas por los dioses del Olimpo para personalizar su estilo de juego.
        Historia y Ambientación:

        Inspiración Mitológica: La trama se basa en la mitología griega, con el jugador asumiendo el papel de Zagreus, el príncipe del Inframundo,
         en su intento de escapar del reino de Hades y reunirse con su madre, Persefone.
        Personajes Carismáticos: El juego cuenta con una variedad de personajes mitológicos,
        cada uno con su propia personalidad y voz, lo que agrega profundidad a la narrativa.
        Diseño Artístico:

        Estilo Visual Único: "Hades" se destaca por su estilo artístico distintivo y vibrante. Los gráficos son nítidos y detallados, con diseños de personajes expresivos y escenarios atmosféricos.
        Progresión del Personaje:

        Mejoras y Objetos: A lo largo del juego, los jugadores pueden ganar
        recursos que se utilizan para desbloquear mejoras permanentes, como nuevas armas, habilidades y bonificaciones.
        Interacciones Narrativas: Cada carrera de escape proporciona oportunidades para interactuar con los personajes, revelando más sobre la historia y ofreciendo recompensas adicionales.
        Rejugabilidad:

        Variabilidad en la Jugabilidad: Debido a la naturaleza roguelike, cada carrera es única, con diferentes enemigos, recompensas y desafíos en cada intento.
        Esto fomenta la rejugabilidad, ya que los jugadores buscan mejorar constantemente y descubrir nuevas combinaciones de habilidades.
        Recepción Crítica:

        Elogios Unánimes: "Hades" recibió elogios generalizados de críticos y jugadores por su jugabilidad adictiva, su narrativa envolvente, su diseño artístico y su música excepcional.
        En resumen, "Hades" es reconocido por su combinación única de elementos roguelike, narrativa rica y acción frenética, lo que lo convierte en un título destacado en el género.`,
        imagenes: ['https://cdn2.unrealengine.com/egs-hades-supergiantgames-g2-00-1920x1080-027048640.jpg?h=720&quality=medium&resize=1&w=1280', 'https://cdn2.unrealengine.com/egs-hades-supergiantgames-g2-02-1920x1080-027048444.jpg?h=720&quality=medium&resize=1&w=1280']
      },
      {
        titulo: 'Animal Crossing: New Horizons',
        texto: 'Crea tu propio paraíso en una isla desierta, interactúa con adorables animales y personaliza tu mundo en este relajante simulador social.',
        imagen: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons_image1600w.jpg',
        fecha: '2023-10-30',
        categoria: 'Simulación',
        descripcion:`Animal Crossing: New Horizons" es un popular juego de simulación de vida desarrollado y publicado por Nintendo para la consola Nintendo Switch. Fue lanzado en marzo de 2020 y se ha convertido en uno de los títulos más exitosos de la plataforma.

        En este juego, los jugadores asumen el papel de un personaje que se muda a una isla desierta después de comprar un paquete de vacaciones de Nook Inc., una empresa dirigida por el mapache Tom Nook. El objetivo principal del juego es crear y personalizar la isla según las preferencias del jugador, fomentando una experiencia relajante y creativa.

        Principales características de "Animal Crossing: New Horizons":

        Creación de Personaje e Isla: Los jugadores pueden personalizar a su personaje al principio del juego y luego diseñar y desarrollar su isla de acuerdo con sus gustos. Pueden elegir la disposición de los edificios, los caminos, la ubicación de los árboles y flores, entre otras cosas.

        Actividades y Tareas: Los jugadores realizan diversas actividades diarias, como pescar, atrapar insectos, cazar fósiles y socializar con los coloridos personajes antropomórficos que habitan la isla. También pueden decorar su hogar y la isla con muebles y otros objetos.

        Estaciones y Eventos: El juego sigue un ciclo estacional y tiene eventos especiales relacionados con festividades del mundo real, como festivales, días festivos y cambios climáticos. Esto mantiene el juego fresco y ofrece nuevas experiencias a lo largo del tiempo.

        Interacción Multijugador: "Animal Crossing: New Horizons" permite la interacción en línea con amigos. Los jugadores pueden visitar las islas de otros jugadores, intercambiar objetos, enviar cartas y participar en actividades juntos.

        Economía y Recursos: Los jugadores pueden ganar y gastar campanas, la moneda del juego, para comprar objetos, muebles, ropa y mejorar su isla. También pueden recolectar recursos como madera, piedra y hierro para crear herramientas y construir estructuras.

        Desarrollo de la Isla: A medida que los jugadores progresan, desbloquean nuevas características y servicios, como la tienda de Nook, la tienda de las Hermanas Manitas, el museo y la posibilidad de construir puentes y escaleras para mejorar la accesibilidad de la isla.

        En general, "Animal Crossing: New Horizons" ha sido elogiado por su jugabilidad relajante, su estética encantadora y su capacidad para fomentar la creatividad y la expresión personal de los jugadores. El juego ha ganado una base de fanáticos leales y ha sido especialmente apreciado por su lanzamiento oportuno durante un período en el que muchos jugadores buscaban experiencias reconfortantes y sociales.`,
        imagenes: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6nrBIvPD0ZE2hpcFvFHZTWpUmDsNH7h4Xc1LDEYwN&s','https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2020/04/animal-crossing-hew-horizons-1927679.jpg?tf=3840x','https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/05/animal-crossing-new-horizons-1953327.jpg?tf=3840x']
      },

    ];



    this.loadLocalStorage();

  }

  /**
   * guarda los datos en el localStore cuando se llama
   */
  saveLocalStorage(): void {
    localStorage.setItem('arrPosts', JSON.stringify(this.arrPosts));
  }

  /**
   *
   * @returns todos los post en la base de datos
   */
  getAllPosts(){
    return this.arrPosts
  }
  /**
   *
   * @returns todas las imagenes de los posts
   */
  getAllImg(){
    return this.arrPosts.map( post => post.imagen )
  }
  /**
   *
   * @param cat categoria a filtrar
   * @returns un array con los objetos que contengan la categoria que se busca
   */
  filterByCategory(cat: string){
    const category = this.arrPosts.filter( post => post.categoria.includes(cat))
    console.log( category);
    return category
  }
  /**
   * funcion que filtra las categorias y las recoge
   * @returns devuelve un array de ellas sin repetir
   */
  getCategory(){
    let categorias = this.arrPosts.map( post => post.categoria)
    let arrCategorias = categorias.map( categoria => categoria.split(',') )
    let cleanCategorias = arrCategorias.join(',').split(',').map( categoria => categoria.trim())
    console.log( cleanCategorias)
    return [...new Set(cleanCategorias)]
  }
  /**
   *
   * @param pPost un nuevo post para publicar
   * a continuacion se guarda el localStorage y acto seguido se carga
   */
  createNewPost( pPost: Post ){
    this.arrPosts.push( pPost );
    this.saveLocalStorage();
    this.loadLocalStorage();
  }
  /**
   *
   * @param titulo para eliminar el post del array y del localStorage
   */
  deletePost( titulo: string){

    const index = this.arrPosts.findIndex( post => post.titulo === titulo)
    this.arrPosts.splice( index, 1);
    localStorage.setItem('arrPosta', JSON.stringify(this.arrPosts));
    this.saveLocalStorage();

  }

  loadLocalStorage(): void {
    if ( !localStorage.getItem('arrPosts')) return;
    this.arrPosts = JSON.parse(localStorage.getItem('arrPosts')!);

  }

  getByTitle( title: string ){
    return this.arrPosts.filter( post => post.titulo === title)
  }
}
