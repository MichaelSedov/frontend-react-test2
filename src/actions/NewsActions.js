import { Redirect, Route } from 'react-router-dom'
import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from './actionTypes'

export function getNews() {
  return dispatch => {
    dispatch({
      type: GET_NEWS_REQUEST,
    })

    fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/news`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          dispatch({
            type: GET_NEWS_FAILURE,
            payload: {
              errorMsg: data.error.message
            },
          })
        } else {
          dispatch({
            type: GET_NEWS_SUCCESS,
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