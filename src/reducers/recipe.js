import { ADD_RECIPE } from '../actions';

export default function recipe(state = [], action) {
  switch(action.type) {
    case ADD_RECIPE:
      return [
        ...state, action.payload.recipeID
      ]
    default:
      return state;
  }
}