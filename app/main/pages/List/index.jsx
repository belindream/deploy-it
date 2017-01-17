import "!style-loader!css-loader!sass-loader!./styles.scss"

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import AccountCircle from 'material-ui/svg-icons/action/account-circle'
import Avatar from 'material-ui/Avatar'

import loginActions from '../../actions/login'
import httpActions from '../../actions/http'

let select = (state) => state

export class List extends Component {
	componentWillMount(){
		if(this.props.projects == false){
			let { userName, secret } = this.props.login
			this.props.SEND_REQUEST({
				address: '/projects'
			  , data: { userName, secret }
			  , method: "POST"
			  , callback: this.props.GOT_PROJECTS
			})
		}
	}
	render () {
		return (
			<div>
				<Toolbar>
					<ToolbarGroup
						firstChild={true}
						className="first-child-toolbar"
					>
						<Avatar
							src="/static/images/robot.jpg"
							size={30}
							className="site-avatar-toolbar"
						/>
						<ToolbarTitle text="Deploy-IT" />
					</ToolbarGroup>
					<ToolbarGroup>
						<ToolbarSeparator />
						<IconMenu
							iconButtonElement={
								<IconButton touch={true}>
									<AccountCircle />
								</IconButton>
							}
						>
							<MenuItem
								primaryText="Show my activity"
								onClick={() => this.props.router.push('/user/activity')}
							/>
							<MenuItem
								primaryText="Logout"
								onClick={() => this.props.LOG_OUT()}
							/>
						</IconMenu>
					</ToolbarGroup>
				</Toolbar>
			</div>
		)
	}
}

export default connect(select, LoginActions)(List)
