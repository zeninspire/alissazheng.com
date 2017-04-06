import React, { Component } from 'react';

class Dating extends Component {
	render () {
		return (
			<div id="dating-all">
				<div id="dating">
					<a id='dating-link' onClick = {() => window.open('http://bash-to-the-dating.herokuapp.com', '_blank')}>Video Dating</a>
				</div>
				<div id="dating-text">
					<h4>Venue Recommendation with AI</h4>
					<h5>A decision engine that learns user preferences and recommends attractions based on user's behavior and history.</h5> 
				</div> 
			</div>
		)
	}
}

export default Dating;