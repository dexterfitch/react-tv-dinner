import { ADD_FILM, ADD_RECIPE, SAVE_TVDINNER } from '..';

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

export function saveTVDinner() {
  return (dispatch) => {
    // ROUTE FOR SAVING TO DATABASE HASN'T BEEN BUILT IN BACKEND YET
    return fetch("http://localhost:3001/save", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ tvdinner: state })
    }).then((res) => {
      if (res.ok) {
        dispatch({ type: SAVE_TVDINNER })
      }
    })
  }
}