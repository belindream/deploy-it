import R from 'ramda'
import { combineReducers, reduceReducers } from '../utils/redux'
import { routerReducer } from 'react-router-redux'

import login from './login'
import http from './http'

let combined = combineReducers({
	routing: routerReducer
  , login
  , http
})

export default reduceReducers(combined)
