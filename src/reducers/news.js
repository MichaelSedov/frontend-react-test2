import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE } from '../actions/actionTypes'

const initialState = {
  data: [],
  errorMsg: '',
  isLoading: false
}

export default (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case GET_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case GET_NEWS_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    case GET_NEWS_FAILURE:
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