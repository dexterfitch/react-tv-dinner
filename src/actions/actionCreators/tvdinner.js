import { GET_TVDINNERS, GET_MY_TVDINNERS, SAVE_TVDINNER } from '..';

export function saveTVDinner(tvdinner) {
  return {
    type: SAVE_TVDINNER,
    payload: tvdinner
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

export function saveTVDinnerApi(newTVDinner) {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/v1/tvdinners', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify(newTVDinner)
    })
      .then(res => res.json())
      .then(newTVDinner => {
        dispatch(saveTVDinner(newTVDinner))
      })
  }
}