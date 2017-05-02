import React, { Component } from 'react';

class Trivia extends Component {
	render () {
		return (
			<div className='each-project col-lg-4 col-md-4 col-sm-12 col-xs-12'>
				<div id="trivia-circle">
					<a className='circ-link' onClick = {() => window.open('http://bash-to-the-trivia.herokuapp.com', '_blank')}>Trivia</a>
				</div><br/>
				<div id="trivia-desc">
					<h4 className='desc1'>Trivia with live updates</h4><br/>
					<h5 className='desc1'>Trivia game platform that allows for simultaneous participation by multiple users</h5> 
				</div> 			
			</div>
		)
	}
}

export default Trivia;