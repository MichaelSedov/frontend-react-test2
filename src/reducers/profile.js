import { GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../actions/actionTypes'

const initialState = {
  data: [],
  errorMsg: '',
  isLoading: false
}

export default (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case GET_PROFILE_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_PROFILE_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload.errorMsg
      }
    default: 
      return state
  }
  return state
}