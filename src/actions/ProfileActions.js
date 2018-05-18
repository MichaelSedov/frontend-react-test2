import { Redirect, Route } from 'react-router-dom'
import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from './actionTypes'

export function getUserProfile(id) {
  return dispatch => {
    dispatch({
      type: GET_PROFILE_REQUEST,
    })

    fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          dispatch({
            type: GET_PROFILE_FAILURE,
            payload: {
              errorMsg: data.error.message
            },
          })
        } else {
          dispatch({
            type: GET_PROFILE_SUCCESS,
            payload: {
              data
            },
          })
        }
      })
      .catch((error) => {
        console.error(error);
      });
    }
}