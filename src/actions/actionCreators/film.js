import { SEARCH_FILM_API } from '..';

export function searchFilms(films) {
  return {
    type: SEARCH_FILM_API,
    payload: films
  }
}

export function searchFilmApi(searchString) {
  return(dispatch) => {
    fetch(`https://api.themoviedb.org/3/search/multi?api_key=e1662fac6894a9932ee327479a6591b1&query=${searchString}`)
      .then((res) => res.json())
      .then((json) => {
        const filteredFilms = json.results.filter(result => !result.media_type.includes("person"));
        dispatch(searchFilms(filteredFilms));
      })
  }    
}