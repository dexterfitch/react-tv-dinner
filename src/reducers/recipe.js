import { ADD_RECIPE, SEARCH_RECIPE_API } from '../actions';

export function selectedRecipes(state = [], action) {
  switch(action.type) {
    case ADD_RECIPE:
      return [
        ...state, action.payload.recipeID
      ]
    default:
      return state;
  }
}

export function searchedRecipes(state = [], action) {
  switch(action.type) {
    case SEARCH_RECIPE_API:
      return action.payload;
    default:
      return state;
  }
}