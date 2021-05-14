import { SAVE_TVDINNER, GET_TVDINNERS, GET_MY_TVDINNERS } from '../actions';

export default function tvdinner(state = { newtvdinner: [], mytvdinners: [], tvdinners: [] }, action) {
  switch(action.type) {
    case SAVE_TVDINNER:
      return {...state, newtvdinner: action.payload };
    case GET_MY_TVDINNERS:
      // debugger
      return {...state, mytvdinners: action.payload };
    case GET_TVDINNERS:
      return { ...state, tvdinners: action.payload };
    default:
      return state;
  }
}