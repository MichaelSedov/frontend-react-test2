import { AUTHORIZATION_REQUEST, AUTHORIZATION_SUCCESS, AUTHORIZATION_FAIL, LOG_OUT } from './actionTypes'

export function Auth(email, password) {
  return (dispatch) => {
    dispatch({
      type: AUTHORIZATION_REQUEST,
    })

    fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/validate/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'email': email,
          'password': password
        })
      }).then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          dispatch({
            type: AUTHORIZATION_SUCCESS,
            payload: {
              email,
              id: data.data.id
            },
          })
        } else {
          dispatch({
            type: AUTHORIZATION_FAIL,
            payload: {
              errorMsg: "Имя пользователя или пароль введены не верно."
            },
          })
        }
      })
      .catch((error) => {
        dispatch({
          type: AUTHORIZATION_FAIL,
          payload: {
            errorMsg: error.message
          },
        })
        console.error(error);
      });
  }
}

export const LogOut = () => {
  type: LOG_OUT
}