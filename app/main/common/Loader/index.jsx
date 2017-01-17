import "!style-loader!css-loader!sass-loader!./styles.scss"

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import LinearProgress from 'material-ui/LinearProgress'

let select = (state) => state

export class Loader extends Component {
	render () {
		return (
			<div>
				{
					this.props.http.isGlobalLoading &&
					<LinearProgress
						mode={
							(this.props.http.percantage)?
								"determinate"
								:"indeterminate"
						}
						value={this.props.http.percantage}
					/>
				}
			</div>
		)
	}
}

export default connect(select)(Loader)
