// Basic js
export const init = function(){

    const movieDisplay = document.querySelector(".movie-display");
    const openBtn = document.querySelector(".nav-humburger img");
    const closeBtn = document.querySelector(".close-menu img");
    const movie = document.querySelectorAll(".individual-wrapper .individual-mo");
    const watchLater = document.querySelector(".watch_later");
    const watchLaterMovie = document.querySelector(".watch-later-mo");
    const movieWrapper = document.querySelector(".individual-wrapper");
    const mainBody = document.querySelector(".main_body");
    const body = document.querySelector("body");

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
    // movie.forEach((e) => e.addEventListener("click", close));
    // watchLater.addEventListener("click", watch);
}