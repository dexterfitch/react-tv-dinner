import { ADD_FILM, SEARCH_FILM_API } from '../actions';

export function selectedFilm(state = null, action) {
  switch(action.type) {
    case ADD_FILM:
      return action.payload.filmID;
    default:
      return state;
  }
}

export function searchedFilms(state = [], action) {
  switch(action.type) {
    case SEARCH_FILM_API:
      return action.payload;
    default:
      return state;
  }
}