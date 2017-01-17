import R from 'ramda'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, useRouterHistory } from 'react-router'
import { browserHistory } from 'react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import * as utils from './utils/redux'
import reducers from './reducers/index'
import routes from './routes'
import injectTapEventPlugin from 'react-tap-event-plugin'


function saveState(state) {
	localStorage.state = JSON.stringify(
		R.omit(
			['routing', 'http']
		  , state
		)
	)
}

function restoreState() {
	try {
		return JSON.parse(localStorage.state)
	} catch (e) {}
}

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let middleware = composeEnhancers(applyMiddleware(thunk, routerMiddleware(browserHistory)))
let store = createStore(reducers, restoreState(), middleware)
store.subscribe(function() {
	saveState(store.getState())
})

injectTapEventPlugin()
let history = syncHistoryWithStore(browserHistory, store)
ReactDOM.render(
	<Provider store={store}>
	    <div>
	  		<Router history={history}>
	  			{routes}
	  		</Router>
	    </div>
	</Provider>
  , document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./reducers', () => {
  		let nextRootReducer = require('./reducers/index').default
  		store.replaceReducer(nextRootReducer)
	})
}

//For debug
global.store = store
