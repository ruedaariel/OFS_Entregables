
"use strict"

// camino pra las imagenes
// https://image.tmdb.org/t/p/w500/

//When looking at the image methods there is a new field called file_type that will show you the original version of the asset that was uploaded. For SVG's, you should call the original image size since we don't resize them. If you prefer to grab PNG's, you can call any size you wish just like normal.

//Take for instance Netflix's logo (wwemzKWzjKYJFfCeiB57q3r4Bcm.svg), you can call any of the following:

//Example

//https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
//https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
//https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

/* adult:false
backdrop_path:"/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg"
genre_ids:(3) [28, 35, 878]
id:533535
original_language:"en"
original_title:"Deadpool & Wolverine"
overview:"A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine."
popularity:3500.919
poster_path:"/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
release_date:"2024-07-24"
title:"Deadpool & Wolverine"
video:false
vote_average:7.746
vote_count:2705 */

let contenedor = document.getElementById("tarjetas");

const rutaImagen = "https://image.tmdb.org/t/p/original/";
const peliculasPopulares = 'https://api.themoviedb.org/3/movie/popular?language=es&page=1';
const peliculasMasValoradas = 'https://api.themoviedb.org/3/movie/top_rated?language=es&page=1';
const peliculasPorLLegar = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
const detalleDePelicula = 'https://api.themoviedb.org/3/movie/238?language=es';
const peliculasTendencias = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'


// datos solicitados por la api para validadr el ingreso
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDU1MWE2Zjc1OWMwMmJhMzc5NDM5NmQxZTUxZWNiYiIsIm5iZiI6MTcyNTgzMDI3Mi42MDY2MjQsInN1YiI6IjY2ZGUxMWJiODEyYmY4MTgxMzM0NGMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TCLeqgLbjZQOlO9qMyiK9hB7dJnlTOUSyC3USjIjT-c'
  }
};

// selecciono todos lo botones de las tarjetas creadas
const todosLosBotones = document.getElementsByClassName("peliculasBoton");

const populares = document.getElementById("populares");
const valoradas = document.getElementById("valoradas");
const porLlegar = document.getElementById("porLlegar");

// *****************  llamada principal **************

cargarDatos(peliculasPopulares, options);

// *****************************************************

populares.addEventListener("click", function () {

      let reseteoTitulo = document.getElementById("titulo");
      reseteoTitulo.innerHTML=" Peliculas Populares ";
      cargarDatos(peliculasPopulares,options);

})

valoradas.addEventListener("click", function () {

  let reseteoTitulo = document.getElementById("titulo");
      reseteoTitulo.innerHTML=" Peliculas Mas Valoradas ";
  cargarDatos(peliculasMasValoradas,options);

})

porLlegar.addEventListener("click", function () {

  let reseteoTitulo = document.getElementById("titulo");
      reseteoTitulo.innerHTML=" Peliculas por llegar ";
  cargarDatos(peliculasPorLLegar,options);

})


// funcion para pedir los datos a la API
async function cargarDatos(url, options) {
  await fetch(url, options)
    .then(response => response.json())
    .then(response => {

      console.log(response.status);
      //console.log(response);
      procesaData(response.results);
      // crea los listenner del boton de cada tarjeta
      creaEventosBotones(response.results);


     })
    .catch(error => console.log(error)); 
}

// funcion que busca los datos de una pelicula en funcion del ID de la misma, que se lee en el click del boton +Info
// crea la card con todos los datos de la pelicula y lo muestra en un modal
async function cargarDatosPelicula(url, options) {
  await fetch(url, options)
    .then(response => response.json())
    .then(response => {

      makeACardPelicula(response);
      

    })
    .catch(err => console.error(err));
}


// funcion que asocia al boton de cada tarjeta un listener par luego buscar los datos
function creaEventosBotones(datos) {

    for (let i = 0; i < datos.length; i++) {

      todosLosBotones[i].addEventListener("click", function (e) {

      // leo el Id pra buscar la pelicula en la API
          let indice = e.target.id;
          //console.log(indice);
          let url =`https://api.themoviedb.org/3/movie/${indice}?language=es`;
          //console.log(url);
          cargarDatosPelicula(url,options);

    })
  }
}

// funcion que procesa el arreglo de datos que llega desde la APU
// y genera una tarjeta para cada una de las peliculas
function procesaData(results) {

  let reseteoHTML = document.getElementById("tarjetas");
  reseteoHTML.innerHTML="";

  for (let i = 0; i < results.length; i++) {

    let original_title = results[i].original_title;
    let overview = results[i].overview;
    let release_date = results[i].release_date;
    let campoImagen = results[i].poster_path;
    let id = results[i].id;

    makeASimpleCard(original_title, campoImagen, release_date, id);

  }
}

// genera un tarjeta con todos los datos de una pelicula
function makeACard(datos) {

  /*<div class="card mb-3" style="max-width: 600px"> ***** div 1 ****
            <div class="row g-0"> ***** div 2 ******
              <div class="col-md-4"> **** div 3 *****
                <img
                  src="https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
                  class="img-fluid rounded-start"
                  alt="..."
                  id="imagen"
                />
              </div>
  
              <div class="col-md-8">  **** div 4 *****
                <div class="card-body"> **** div 5 *****
                  <h4 class="card-title">Deadpool & Wolverine</h4>
                  <p class="card-text">
                    A listless Wade Wilson toils away in civilian life with his
                    days as the morally flexible mercenary, Deadpool, behind him.
                    But when his homeworld faces an existential threat, Wade must
                    reluctantly suit-up again with an even more reluctant
                    Wolverine.
                  </p>
                  <p class="card-text"> ***** p 1 ******
                    <small class="text-body-primary">
                      Estrenada en 2024-07-24</small
                    >
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
   */

  // <div class="card mb-3" style="max-width: 600px"> ***** div 1 ******

  let divUno = document.createElement("div");
  divUno.setAttribute("class", "card mb-3 h-7 w-75 p-2 m-3");
  //divUno.setAttribute("style", "max-width: 700px");

  // <div class="row g-0"> ***** div 2 ******
  let divDos = document.createElement("div");
  divDos.setAttribute("class", "row g-0");

  //<div class="col-md-4"> **** div 3 *****   
  let divTres = document.createElement("div");
  divTres.setAttribute("class", "col-md-4");

  // creo el elemento imagen
  let imagen = document.createElement("img");
  imagen.setAttribute("class", "img-fluid rounded-start");
  imagen.setAttribute("src", rutaImagen + `${datos.poster_path}`);
  imagen.setAttribute("alt", `${datos.original_title}`);

  divTres.appendChild(imagen);

  //<div class="col-md-8">  **** div 4 *****
  let divCuatro = document.createElement("div");
  divCuatro.setAttribute("class", "col-md-8");

  //<div class="card-body"> **** div 5 *****
  let divCinco = document.createElement("div");
  divCinco.setAttribute("class", "card-body");

  // <h4 class="card-title">Deadpool & Wolverine</h4>
  let h4Card = document.createElement("h3");
  h4Card.setAttribute("class", "card-title");
  let h4Texto = document.createTextNode(`${datos.original_title}`);
  h4Card.appendChild(h4Texto);

  //  <p class="card-text">
  let pCard = document.createElement("p");
  pCard.setAttribute("class", "card-text text-wrap");
  let pCardTexto = document.createTextNode(`${datos.overview}`);
  pCard.appendChild(pCardTexto);

  //  <p class="card-text"> ***** p 1 ******
  let pUnoCard = document.createElement("p");
  pUnoCard.setAttribute("class", "card-text");
  let pUnoCardTexto = document.createTextNode(`Estrenada en:  ${datos.release_date}`);
  pUnoCard.appendChild(pUnoCardTexto);


  divCinco.appendChild(h4Card);
  divCinco.appendChild(pCard);
  divCinco.appendChild(pUnoCard);


  divCuatro.appendChild(divCinco);

  divDos.appendChild(divTres);
  divDos.appendChild(divCuatro);
  divUno.appendChild(divDos);


  contenedor.appendChild(divUno);
}



// funcion que genra una tarjeta competa con todos los datos de una pelicula
// para mostrarlo en el modal
function makeACardPelicula(datos) {

  let peliculaModal = document.getElementById("tarjetasModal");
  peliculaModal.innerHTML="";

  // <div class="card mb-3" style="max-width: 600px"> ***** div 1 ******

  let divUno = document.createElement("div");
  divUno.setAttribute("class", "card mb-3 h-7 w-75 p-2 m-3");
  //divUno.setAttribute("style", "max-width: 700px");

  // <div class="row g-0"> ***** div 2 ******
  let divDos = document.createElement("div");
  divDos.setAttribute("class", "row g-0");

  //<div class="col-md-4"> **** div 3 *****   
  let divTres = document.createElement("div");
  divTres.setAttribute("class", "col-md-4");

  // creo el elemento imagen
  let imagen = document.createElement("img");
  imagen.setAttribute("class", "img-fluid rounded-start");
  imagen.setAttribute("src", rutaImagen + `${datos.poster_path}`);
  imagen.setAttribute("alt", `${datos.original_title}`);

  divTres.appendChild(imagen);

  //<div class="col-md-8">  **** div 4 *****
  let divCuatro = document.createElement("div");
  divCuatro.setAttribute("class", "col-md-8");

  //<div class="card-body"> **** div 5 *****
  let divCinco = document.createElement("div");
  divCinco.setAttribute("class", "card-body");

  // <h4 class="card-title">Deadpool & Wolverine</h4>
  let h4Card = document.createElement("h3");
  h4Card.setAttribute("class", "card-title");
  let h4Texto = document.createTextNode(`${datos.original_title}`);
  h4Card.appendChild(h4Texto);

  //  <p class="card-text">
  let pCard = document.createElement("p");
  pCard.setAttribute("class", "card-text text-wrap");
  let pCardTexto = document.createTextNode(`${datos.overview}`);
  pCard.appendChild(pCardTexto);

  //  <p class="card-text"> ***** p 1 ******
  let pUnoCard = document.createElement("p");
  pUnoCard.setAttribute("class", "card-text");
  let pUnoCardTexto = document.createTextNode(`Estrenada en:  ${datos.release_date}`);
  pUnoCard.appendChild(pUnoCardTexto);

  let pUnoCardHomePage = document.createElement("p");
  pUnoCardHomePage.setAttribute("class", "card-text");
  let pUnoCardTexto1 = document.createTextNode(`web: ${datos.homepage}`);
  pUnoCardHomePage.appendChild(pUnoCardTexto1);

  let pUnoCardCompania = document.createElement("p");
  pUnoCardCompania.setAttribute("class", "card-text");
  let pUnoCardTextoC = document.createTextNode(`Estudio: ${datos.production_companies[0].name}`);
  pUnoCardCompania.appendChild(pUnoCardTextoC);

  let pUnoCardCountry = document.createElement("p");
  pUnoCardCountry.setAttribute("class", "card-text");
  let pUnoCardTextoCountry = document.createTextNode(`Pais Origen: ${datos.origin_country[0]}`);
  pUnoCardCountry.appendChild(pUnoCardTextoCountry);

  let pUnoCardLengua = document.createElement("p");
  pUnoCardLengua.setAttribute("class", "card-text");
  let pUnoCardTextolengua = document.createTextNode(`Idioma Original: ${datos.spoken_languages[0].name}`);
  pUnoCardLengua.appendChild(pUnoCardTextolengua);

  let pUnoCardValoracion = document.createElement("p");
  pUnoCardValoracion.setAttribute("class", "card-text");
  let pUnoCardTextoValoracion = document.createTextNode(`Promedio Votación: ${datos.vote_average}`);
  pUnoCardValoracion.appendChild(pUnoCardTextoValoracion);

  let pUnoCardDuracion = document.createElement("p");
  pUnoCardDuracion.setAttribute("class", "card-text");
  let pUnoCardTextoDuracion = document.createTextNode(`Duración: ${datos.runtime} minutos`);
  pUnoCardDuracion.appendChild(pUnoCardTextoDuracion);


  divCinco.appendChild(h4Card);
  divCinco.appendChild(pCard);
  divCinco.appendChild(pUnoCard);
  divCinco.appendChild(pUnoCardCountry);
  divCinco.appendChild(pUnoCardLengua);
  divCinco.appendChild(pUnoCardHomePage);
  divCinco.appendChild(pUnoCardCompania);
  divCinco.appendChild(pUnoCardDuracion);
  divCinco.appendChild(pUnoCardValoracion);


  divCuatro.appendChild(divCinco);

  divDos.appendChild(divTres);
  divDos.appendChild(divCuatro);
  divUno.appendChild(divDos);


  peliculaModal.appendChild(divUno);

}


// funcion que realiza una tarjeta simple, la que se muestra en pantalla
function makeASimpleCard(original_title, campoImagen, release_date, id) {

  //div class="card" style="width: 18rem;"> **** div 1
  let divUno = document.createElement("div");
  divUno.setAttribute("class", "card m-2 p-1 h-10 ");
  divUno.setAttribute("style", "width: 22rem");
  // divUno.setAttribute("style","height: 600px");

  // <img src="..." class="card-img-top" alt="...">
  let imagen = document.createElement("img");
  imagen.setAttribute("class", "card-img-top");
  imagen.setAttribute("src", rutaImagen + `${campoImagen}`);
  imagen.setAttribute("alt", `${original_title}`);

  //<div class="card-body"> **** dic 2 ****
  let divDos = document.createElement("div");
  divDos.setAttribute("class", "card-body");

  // <h5 class="card-title">Card title</h5>

  let h4Card = document.createElement("h5");
  h4Card.setAttribute("class", "card-title");
  let h4Texto = document.createTextNode(`${original_title}`);
  h4Card.appendChild(h4Texto);

  // href="#" class="btn btn-primary">Go somewhere</a>

  //<div class="d-grid gap-2">

  let divBtn = document.createElement("div");
  divBtn.setAttribute("class", "d-grid gap-2");

  let btnInfo = document.createElement("button");
  btnInfo.setAttribute("id", `${id}`);
  btnInfo.setAttribute("class", "btn btn-primary peliculasBoton");
  btnInfo.setAttribute("data-bs-toggle", "modal");
  btnInfo.setAttribute("data-bs-target", "#modalDatosPelicula");
  let textBotonInfo = document.createTextNode("+ Info");
  btnInfo.appendChild(textBotonInfo);

  divBtn.appendChild(btnInfo);

  divDos.appendChild(h4Card);
  divDos.appendChild(divBtn);

  divUno.appendChild(imagen);
  divUno.appendChild(divDos);

  contenedor.appendChild(divUno);
}

