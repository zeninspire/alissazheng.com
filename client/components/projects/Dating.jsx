import React, { Component } from 'react';

class Dating extends Component {
	render () {
		return (
			<div className='each-project col-lg-4 col-md-4 col-sm-12 col-xs-12'>
				<div id="dating-circle">
					<a className='circ-link' onClick = {() => window.open('http://bash-to-the-dating.herokuapp.com', '_blank')}>Video Dating</a>
				</div><br/>
				<div id="dating-desc">
					<h4 className='desc1'>Date-matching with video chat</h4><br/>
					<h5 className='desc2'>Real time video communication app that matches users based on personal information and interests</h5> 
				</div><br/> <br/> <br/> 
			</div>
		)
	}
}

export default Dating;