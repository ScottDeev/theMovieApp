import { IMG_URL } from "./configMovie.js";
// init();

class searchResultView{
    _data;
    _parentElement = document.querySelector(".individual-wrapper");
    _targetElement = document.querySelector(".form");
    render(data){
        this._data = data;
        const markup = this._generateMarkup();
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    addHandlerDisplaySearch(handler){
        this._targetElement.addEventListener('submit', function(e){
            e.preventDefault();
            const searchTerm = document.querySelector(".search").value;
            handler(searchTerm);
        })
    }
    _generateMarkup(){
        return this._data.map(data =>{
            return`
            <div class="individual-mo" data-id='${data.id}'>
                <div class="movie-img">
                    <img src="${IMG_URL}${data.posterPath}" alt="${data.title}">
                </div>
                <div>
                    <h2>${data.title}</h2>
                    <p> Rating : ${data.voteAverage} </p>
                </div>
            </div> `;
        })
    }
}
export default new searchResultView()