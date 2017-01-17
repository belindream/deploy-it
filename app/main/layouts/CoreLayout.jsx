import React, { Component } from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import Loader from '../common/Loader'

export default class CoreLayout extends Component{
	render(){
		return(
			<MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
				<div>
					<Loader />
					{this.props.children}
				</div>
			</MuiThemeProvider>
		)
	}
}
