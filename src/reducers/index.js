import { combineReducers } from 'redux';
import auth from './auth';
import { selectedFilm, searchedFilms } from './film';
import { selectedRecipe, searchedRecipes } from './recipe';
import tvdinner from './tvdinner';

export default combineReducers ({
  auth,
  selectedFilm,
  searchedFilms,
  selectedRecipe,
  searchedRecipes,
  tvdinner
});