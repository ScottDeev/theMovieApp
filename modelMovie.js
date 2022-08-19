import { API_URL, BASE_URL, API_KEY } from "./configMovie.js";

export const movieObject = {
    movie: {},
    result: [],
    searchResult: [],
}

export const getMovies = async function () {
    try{
        const res = await fetch(API_URL);
        const data = await res.json();
        if(!res.ok) throw new Error (`${res.status}`)
        movieObject.result = data.results.map(r => {
            return {
                title: r.title,
                releaseData: r.release_date,
                overview: r.overview,
                posterPath: r.poster_path,
                voteAverage: r.vote_average,
                id: r.id,
            }
        });
    }catch(err){
        throw err;
    }
}

const createMovieObject = function(data){
    const movieDetails = data;
    // console.log(movieDetails);
    // console.log(data);
    return{
        title: movieDetails.title,
        releaseData: movieDetails.release_date,
        overview: movieDetails.overview,
        posterPath: movieDetails.poster_path,
        voteAverage: movieDetails.vote_average,
        tagline: movieDetails.tagline,
        homepage: movieDetails.homepage,
        runtime: movieDetails.runtime,
        genres: movieDetails.genres.map(({name}) =>{
            return name
        })
    }
}

export const displayMovie = async function(id){
    try{
        const res = await fetch(`${BASE_URL}/movie/${id}?${API_KEY}`);
        const data = await res.json();
        movieObject.movie = createMovieObject(data);
        // console.log(movieObject.movie.genres[0].name);
    }catch(err){
        console.log(err);
    }
}
export const displaySearchMovie = async function(searchTerm){
    try{
        const res = await fetch(`${BASE_URL}/search/movie?${API_KEY}&query=${searchTerm}`);
        const data = await res.json();
        movieObject.result = data.results.map(r => {
            return {
                title: r.title,
                releaseData: r.release_date,
                overview: r.overview,
                posterPath: r.poster_path,
                voteAverage: r.vote_average,
                id: r.id,
            }
        });
    }catch(err){
        console.log(err);
    }
}
