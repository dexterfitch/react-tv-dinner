import { SAVE_TVDINNER } from '../actions';

export default function tvdinner(state = {}, action) {
  switch(action.type) {
    case SAVE_TVDINNER:
      return state;
    default:
      return state;
  }
}