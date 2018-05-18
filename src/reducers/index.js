import { combineReducers } from 'redux'
import authorization from './authorization'
import profile from './profile'
import news from './news'

export default combineReducers({
  authorization,
  profile,
  news
})