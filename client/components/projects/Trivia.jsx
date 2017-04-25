import React, { Component } from 'react';

class Trivia extends Component {
	render () {
		return (
			<div className='each-project col-lg-12 col-md-12 col-sm-4 col-xs-4'>
				<div id="trivia">
					<a id='trivia-link' onClick = {() => window.open('http://bash-to-the-trivia.herokuapp.com', '_blank')}>Trivia</a>
				</div>
				<div id="trivia-text">
					<h4>Trivia with live updates</h4>
					<h5>Trivia game platform that allows for simultaneous participation by multiple users</h5> 
				</div> 			
			</div>
		)
	}
}

export default Trivia;