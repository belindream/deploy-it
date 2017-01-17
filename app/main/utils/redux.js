import R from 'ramda'

export function createActions(actions, defaults) {
	return actions.reduce(function(actions, action) {
		if (typeof action === 'string') action = { type: action }
		action = Object.assign({}, defaults, action)
		if (!action.act) {
			action.act = function(data) {
				return { type: this.type, data, date: new Date() }
			}
		}
		var act = function(data) {
			return action.act(data)
		}
		Object.assign(act, action)
		actions[action.type] = act
		return actions
	}, {})
}

export function createReducer(initialState, handlers) {
  	return function reducer(state = initialState, action, ...rest) {
  		const handler = handlers[action.type]
  		return handler ? handler(state, action, ...rest) : state
  	}
}

export function reduceReducers(...reducers) {
 return function(state, action){
  return R.reduce(function(state, reducer){
   return reducer(state, action)
  }, state, reducers)
 }
}

export function combineReducers(reducers) {
	function getUndefinedStateErrorMessage(key, action) {
  		let actionType = action && action.type
  		let actionName = actionType && `"${actionType.toString()}"` || 'an action'
		return (
    		`Reducer "${key}" returned undefined handling ${actionName}. ` +
    		`To ignore an action, you must explicitly return the previous state.`
  		)
	}
  	return function combination(state = {}, action) {
    	let finalState = Object.assign({}, state)
    	let hasChanged = false
    	R.mapObjIndexed((reducer, key) => {
      		let previousStateForKey = state[key]
      		let nextStateForKey = reducer(previousStateForKey, action, finalState)
      		if (nextStateForKey === undefined) {
        		let errorMessage = getUndefinedStateErrorMessage(key, action)
        		throw new Error(errorMessage)
      		}
      		if (nextStateForKey !== previousStateForKey) {
      			finalState[key] = nextStateForKey
      			hasChanged = true
      		}
    	}, reducers)
    	return hasChanged ? finalState : state
  	}
}

if (typeof Object.assign != 'function') {
	(function () {
		Object.assign = function (target) {
			'use strict';
			if (target === undefined || target === null) {
				throw new TypeError('Cannot convert undefined or null to object');
			}

			var output = Object(target);
			for (var index = 1; index < arguments.length; index++) {
				var source = arguments[index];
				if (source !== undefined && source !== null) {
					for (var nextKey in source) {
						if (source.hasOwnProperty(nextKey)) {
							output[nextKey] = source[nextKey];
						}
					}
				}
			}
			return output;
		};
	})();
}
