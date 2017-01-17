import { createReducer } from '../utils/redux'

const initialState = {
	isLogedIn: false
  , secret: ''
  , userName: ''
  , password: ''
}

export default createReducer(initialState, {
	LOGGED_IN: (currentState, action) => ({...currentState, isLogedIn: true, secret: action.secret, userName: action.userName}),
	LOG_OUT: (currentState) => initialState,
	LOGIN_CHANGE: (currentState, action) => ({...currentState, userName: action.data}),
	PASS_CHANGE: (currentState, action) => ({...currentState, password: action.data}),
})
