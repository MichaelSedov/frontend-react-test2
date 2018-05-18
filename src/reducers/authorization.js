import { AUTHORIZATION_REQUEST, AUTHORIZATION_SUCCESS, AUTHORIZATION_FAIL, LOG_OUT } from '../actions/actionTypes'

const initialState = {
  user: null,
  errorMsg: '',
  isLoading: false
}

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case AUTHORIZATION_REQUEST: 
      return {
        isLoading: true
      }
    case AUTHORIZATION_SUCCESS: 
      return {
        ...state,
        user: {
          name: action.payload.email,
          id: action.payload.id,
          isLoading: false
        }
      }
    case AUTHORIZATION_FAIL:
      return {
        ...state,
        user: null,
        isLoading: false,
        errorMsg: action.payload.errorMsg
      }
    case LOG_OUT:
      return {
        user: null
      }
    default: 
      return state
  }
  return state
}