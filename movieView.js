import { IMG_URL } from "./configMovie.js";

class movieView{
    _data;
    _parentElement = document.querySelector(".individual-wrapper");

    render(data){
        this._data = data;
        const markup = this._generateMarkup();
        this._parentElement.innerHTML = '';
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _generateMarkup(){
        return this._data.map(data =>{
            return`
            <a href= "#top" class="individual-mo" data-id='${data.id}'>
                <div class="movie-img">
                    <img src="${IMG_URL}${data.posterPath}" alt="${data.title}">
                </div>
                <div class= "details-mo">
                    <h2>${data.title}</h2>
                    <p> Rating : ${data.voteAverage} </p>
                </div>
            </a>
        `;
        })
    }
}

export default new movieView();