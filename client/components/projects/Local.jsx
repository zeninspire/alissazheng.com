import React, { Component } from 'react';

class Local extends Component {
	render () {
		return (
			<div id='local-all'>
				<div id="local">
					<a id='local-link' onClick = {() => window.open('http://www.local-spot.com', '_blank')}>Local-Spot</a>
				</div>
				<div id='local-text'> 
					<h4>Venue Recommendation with AI</h4>
					<h5>A decision engine that learns user preferences and recommends attractions based on user's behavior and history.</h5> 
				</div>
			</div>
		)
	}
}

export default Local;