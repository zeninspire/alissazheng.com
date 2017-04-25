import React, { Component } from 'react';

class Dating extends Component {
	render () {
		return (
			<div className='each-project col-lg-12 col-md-12 col-sm-4 col-xs-4'>
				<div id="dating">
					<a id='dating-link' onClick = {() => window.open('http://bash-to-the-dating.herokuapp.com', '_blank')}>Video Dating</a>
				</div>
				<div id="dating-text">
					<h4>Date-matching with video chat</h4>
					<h5>Real time video communication app that matches users based on personal information and interests</h5> 
				</div> 
			</div>
		)
	}
}

export default Dating;