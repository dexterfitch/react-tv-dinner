import { ADD_FILM, ADD_RECIPE } from '..';

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



// ROUTE FOR SAVING TO DATABASE HASN'T BEEN BUILT IN BACKEND YET

// export function saveTVDinner(tvdinner) {
//   return (dispatch) => {
//     return fetch("http://localhost:3001/save", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ ???????? })
//     }).then((res) => {
//       if (res.ok) {
//         dispatch({ type: SAVE_TVDINNER })
//       }
//     })
//   }
// }