import { createStore, applyMiddleware } from "redux";
import reducers from '../reducers'
import logger from 'redux-logger'
import promise from "redux-promise-middleware";
import thunk from 'redux-thunk'

const middleware = applyMiddleware(  promise(),  thunk,  logger );
const store = createStore(reducers, middleware)

window.store = store

export default store