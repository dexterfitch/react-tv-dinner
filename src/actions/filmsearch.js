import { 
  FETCH_FILMS_PENDING, 
  FETCH_FILMS_SUCCESS, 
  FETCH_FILMS_ERROR 
} from '.';

function fetchFilmsPending() {
  return {
    type: FETCH_FILMS_PENDING
  }
}

function fetchFilmsSuccess(films) {
  return{
    type: FETCH_FILMS_SUCCESS,
    payload: films
  }
}

function fetchFilmsError(error) {
  return {
    type: FETCH_FILMS_ERROR,
    error: error
  }
}