import React, { Component } from 'react';

class Local extends Component {
	render () {
		return (
			<div className='each-project col-lg-12 col-md-12 col-sm-4 col-xs-4'>
				<div id="local">
					<a id='local-link' onClick = {() => window.open('https://github.com/UrbanGrizzly/LetsDoLunch', '_blank')}>Local-Spot</a>
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