import React, { Component } from 'react';

class Trivia extends Component {
	render () {
		return (
			<div id='trivia-all'>
				<div id="trivia">
					<a id='trivia-link' onClick = {() => window.open('http://bash-to-the-trivia.herokuapp.com', '_blank')}>Trivia</a>
				</div>
				<div id="trivia-text">
					<h4>Venue Recommendation with AI</h4>
					<h5>A decision engine that learns user preferences and recommends attractions based on user's behavior and history.</h5> 
				</div> 			
			</div>
		)
	}
}

export default Trivia;