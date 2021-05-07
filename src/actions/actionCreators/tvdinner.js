import { ADD_FILM, ADD_RECIPE, GET_TVDINNERS, GET_MY_TVDINNERS} from '../index';

export function addFilm(filmID) {
  return {
    type: ADD_FILM,
    payload: {
      filmID: filmID
    }
  }
}
export function addRecipe(recipeID) {
  return {
    type: ADD_RECIPE,
    payload: {
      recipeID: recipeID
    }
  }
}
export function getMyTVDinners(mytvdinners) {
  // debugger
  return {
    type: GET_MY_TVDINNERS,
    payload: mytvdinners
  }
}

export function getTVDinners(tvdinners) {
  return {
    type: GET_TVDINNERS,
    payload: tvdinners
  }
}

export function getTVDinnersApi() {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/tvdinners', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    })
      .then(tvdinners => tvdinners.json())
      .then(tvdinnersjson => {
        dispatch(getTVDinners(tvdinnersjson))
      }
    )
  }
}

export function getMyTVDinnersApi() {
  // debugger
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/mytvdinners', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    })
      .then(tvdinners => tvdinners.json())
      .then(mytvdinnersjson => {
        dispatch(getMyTVDinners(mytvdinnersjson))
      }
    )
  }
}