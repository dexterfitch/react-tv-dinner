import { ADD_FILM } from '../actions';

export default function film(state = null, action) {
  switch(action.type) {
    case ADD_FILM:
      return action.payload.filmID;
    default:
      return state;
  }
}