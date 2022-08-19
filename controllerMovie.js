import * as model from './modelMovie.js';
import movieView  from './movieView.js';
import movieDisplayView from './movieDisplayView.js';
import { init } from './app.js';
import searchResultView from './searchResultView.js';
init();


const controlMovie = async function (){
    try{
        await model.getMovies();

        movieView.render(model.movieObject.result)
    }catch(err){
        console.log(err);
    }
}

const controlMovieDisplay = async function(id){
    try{
        await model.displayMovie(id);
        movieDisplayView.render(model.movieObject.movie);
    }catch(err){
        console.log(err);
    }
}

const controlMovieSearch = async function(searchTerm){
    try{
        await model.displaySearchMovie(searchTerm);

        searchResultView.render(model.movieObject.result);
    }catch(err){
        console.log(err);
    }
}
movieDisplayView.addHandlerNovieDisplay(controlMovieDisplay);
searchResultView.addHandlerDisplaySearch(controlMovieSearch);
controlMovie();
;


































/*
// Config js

// const INDIVIDUAL_URL = `${BASE_URL}/movie${id}?${API_KEY}`;
// Selectors
const movieDisplay = document.querySelector(".movie-display");
const openBtn = document.querySelector(".nav-humburger img");
const closeBtn = document.querySelector(".close-menu img");
const movie = document.querySelectorAll(".individual-wrapper .individual-mo");
const watchLater = document.querySelector(".watch_later");
const watchLaterMovie = document.querySelector(".watch-later-mo");
const movieWrapper = document.querySelector(".individual-wrapper");
const mainBody = document.querySelector(".main_body");
const body = document.querySelector("body");
await getMovies(API_URL);
console.log(movieObject.movie);


function showMovies(data) {
  data.forEach((movie) => {
    const { title, poster_path, vote_average, id } = movie;
    const html = `
            <div class="individual-mo" data-id='${id}'>
                <div class="movie-img">
                    <img src="${IMG_URL}${poster_path}" alt="${title}">
                </div>
                <div>
                    <h2>${title}</h2>
                    <p> Rating:${vote_average} </p>
                </div>
            </div>
        `;
    movieWrapper.insertAdjacentHTML("afterbegin", html);
  });
}

movieWrapper.addEventListener("click", function (e) {
  const movie = e.target.closest(".individual-mo");
  if (!movie) return;
  // console.log(movie);
  const movieId = movie.dataset.id;
  getIndividualMovie(movieId);
  close();
});
function getIndividualMovie(id) {
  fetch(`${BASE_URL}/movie/${id}?${API_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      generateMarkup(data);
    });
}
function generateMarkup(data) {
  const { title, poster_path, overview, tagline, backdrop_path } = data;
  console.log(title);
  const html = `
            <div class="picture-div">
                <figure class="movie-picture">
                    <img src="${IMG_URL}${poster_path}" alt="${title}">
                    <div>
                        <a href="">Watch Trailer</a>
                        <a href="">Watch Later</a>
                    </div>
                </figure>
            </div>
            <div class="movie-details">
                <div class="main_details">
                    <h2>${title}</h2>
                    <p>${tagline}</p>
                    <div class="storylinecast">
                        <div class="storyline">
                            <h4>Story line</h4>
                            <p>
                                ${overview}
                            </p>
                        </div>
                        <div class="cast">
                            <h4>Cast</h4>
                            <div class="cast-details">
                                <div class="cast-icon"></div>
                                <div class="cast-name">
                                    <h5>Scott</h5>
                                    <p>Peter</p>
                                </div>
                            </div>
                            <div class="cast-details">
                                <div class="cast-icon"></div>
                                <div class="cast-name">
                                    <h5>Scott</h5>
                                    <p>Peter</p>
                                </div>
                            </div>
                            <div class="cast-details">
                                <div class="cast-icon"></div>
                                <div class="cast-name">
                                    <h5>Scott</h5>
                                    <p>Peter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `;
  mainBody.innerHTML = "";
  mainBody.insertAdjacentHTML("afterbegin", html);
}

const addMovie = function (data) {
  bookmark.push(data);
};

// Basic js
const close = function () {
  movieDisplay.classList.remove("show-menu");
  body.classList.remove("overlay");
  movieDisplay.style.transition = "ease .5s";
  body.style.transition = "ease .5s";
};
const open = function () {
  movieDisplay.classList.add("show-menu");
  body.classList.add("overlay");
  movieDisplay.style.transition = "ease .5s";
  body.style.transition = "ease .5s";
};
const watch = function () {
  watchLaterMovie.classList.toggle("show-menu");
  watchLaterMovie.style.transition = "ease .5s";
};
openBtn.addEventListener("click", open);
closeBtn.addEventListener("click", close);
movie.forEach((e) => e.addEventListener("click", close));
watchLater.addEventListener("click", watch);
*/