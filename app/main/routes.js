import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from './layouts/CoreLayout'
import Root from './pages/Root'
import Login from './pages/Login'
import List from './pages/List'

export default (
	<Route component={CoreLayout}>
		<Route path='/' component={Root}>
			<IndexRoute component={List} />
			<Route path='list' component={List} />
		</Route>
		<Route path='/login' component={Login} />
	</Route>
)
