import React, { Component } from 'react';

class Trivia extends Component {
	render () {
		return (
			<div className='each-project col-lg-12 col-md-12 col-sm-4 col-xs-4'>
				<div id="trivia-circle">
					<a className='circ-link' onClick = {() => window.open('http://bash-to-the-trivia.herokuapp.com', '_blank')}>Trivia</a>
				</div>
				<div id="trivia-desc">
					<h4 className='desc1'>Trivia with live updates</h4>
					<h5 className='desc1'>Trivia game platform that allows for simultaneous participation by multiple users</h5> 
				</div> 			
			</div>
		)
	}
}

export default Trivia;