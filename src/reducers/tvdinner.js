import { SAVE_TVDINNER, GET_MY_TVDINNERS } from '../actions';

export default function tvdinner(state = {mytvdinners:[]}, action) {
  switch(action.type) {
    case SAVE_TVDINNER:
      return state;
    case GET_MY_TVDINNERS:
      debugger;
      return {...state, mytvdinners: action.payload }
    default:
      return state;
  }
}