import { createReducer } from '../utils/redux'

const initialState = {
	address: ''
  , data: ''
  , method: ''
  , ready: false
  , isLoading: false
  , isGlobalLoading: false
  , callback: () => {}
  , percantage: false
}

export default createReducer(initialState, {
	SEND_REQUEST: (currentState, action) => ({
		address: action.data.address
	  , data: action.data.data
	  , method: action.data.method
	  , ready: true
	  , callback: action.data.callback
	  , isLoading: true
	  , isGlobalLoading: action.data.isGlobalLoading || false
	  , percantage: action.data.percantage || false
	}),
	GOT_REQUEST: (currentState) => initialState
})
