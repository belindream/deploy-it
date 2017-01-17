import React, { Component } from 'react'
import { connect } from 'react-redux'

let select = state => state

export class Root extends Component{
	componentWillUpdate(nextProps){
		let { userName, secret } = nextProps
		if(!userName || !secret){
			this.props.router.push('/login')
		}
	}
	render(){
		return(
			<div>
				{this.props.children}
			</div>
		)
	}
}


export default connect(select)(Root)
