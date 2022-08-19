import { init } from "./app.js";
import { IMG_URL } from "./configMovie.js";
// init();

class movieDisplayView{
    _data;
    _parentElement = document.querySelector(".main_body");
    _targetElement = document.querySelector(".individual-wrapper");
    render(data){
        this._data = data;
        const markup = this._generateMarkup();
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    addHandlerNovieDisplay(handler){
        const body = document.querySelector("body");
        const movieDisplay = document.querySelector(".movie-display");


        this._targetElement.addEventListener('click', function(e){
            const movie = e.target.closest(".individual-mo");
            if (!movie) return;
            // console.log(movie);
            const movieId = movie.dataset.id;
            handler(movieId);
            movieDisplay.classList.remove("show-menu");
            body.classList.remove("overlay");
            movieDisplay.style.transition = "ease .5s";
            body.style.transition = "ease .5s";
        })
    }
    _generateMarkup(){
        return`
                <div class="picture-div">
                    <figure class="movie-picture">
                        <img src="${IMG_URL}${this._data.posterPath}" alt="${this._data.title}">
                        <div>
                            <a href="${this._data.homepage}" target="_blank">Visit Movie site</a>
                        </div>
                    </figure>
                </div>
                <div class="movie-details">
                    <div class="main_details">
                        <div class="details-header">
                            <h2>${this._data.title}</h2>
                            <p>${this._data.tagline}</p>
                        </div>
                        <div class="storylinecast">
                            <div class="storyline">
                                <h4>Story line</h4>
                                <p>
                                    ${this._data.overview}
                                </p>
                            </div>
                            <div class="special-details">
                                <h4>MOVIE DETAILS</h4>
                                <div>
                                    <p>Rating : ${this._data.voteAverage}</p>
                                    <p>Runtime : ${this._data.runtime}mins</p>
                                    <p>Genre : ${this._data.genres.join(', ')}</p>
                                </div>
                                <div>
                                    <a href="${this._data.homepage}" target="_blank">Visit Movie site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `;

    }
}

export default new movieDisplayView();