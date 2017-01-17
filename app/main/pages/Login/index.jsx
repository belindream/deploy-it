import "!style-loader!css-loader!sass-loader!./styles.scss"

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import R from 'ramda'

import LoginActions from '../../actions/login'
import HttpActions from '../../actions/http'

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import RefreshIndicator from 'material-ui/RefreshIndicator'

let select = (state) => state


export class Login extends Component {
	componentWillUpdate(nextProps){
		let { userName, secret } = nextProps
		if(userName && secret){
			this.props.router.push('/')
		}
	}
	render () {
		return (
			<div
				className="background"
			>
				<Card
					className='login-card-holder'
				>
					{this.props.http.isLoading &&
						<div
							className="popover"
						>
							<RefreshIndicator
								size={50}
								left={165}
								top={225}
								loadingColor="#FF9800"
								status="loading"
							/>
						</div>
					}
					<CardHeader
						title="Login"
						subtitle="In order to use this app login please "
						avatar="/static/images/lock.png"
					/>
					<CardText>
						<TextField
							fullWidth={true}
							floatingLabelText="Login"
							className='loginField'
							onChange={(evt) => this.props.LOGIN_CHANGE(evt.target.value)}
						/>
						<TextField
							fullWidth={true}
							floatingLabelText="Password"
							className='loginField'
							type="password"
							onChange={(evt) => this.props.PASS_CHANGE(evt.target.value)}
						/>

					</CardText>
					<CardActions
						className="stick-to-bottom"
					>
						<RaisedButton
							onClick={() => {
								let { userName, password } = this.props.login
								if(userName && password){
									// this.props.SEND_REQUEST({
									// 	address: '/login'
									//   , data: { userName, password }
									//   , method: "POST"
									//   , callback: this.props.LOGGED_IN
									// })
									this.props.LOGGED_IN({
										userName: 'Admin'
									  , secret: '1234'
									})
								}else{
									this.props.router.push('/')
								}
							}}
							label="Login"
						/>
					</CardActions>
				</Card>
			</div>
		)
	}
}

export default connect(select, R.mergeAll([LoginActions, HttpActions]))(Login)
