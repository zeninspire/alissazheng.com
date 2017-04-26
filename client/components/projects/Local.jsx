import React, { Component } from 'react';

class Local extends Component {
	render () {
		return (
			<div className='each-project col-lg-12 col-md-6 col-sm-4 col-xs-4'>
				<div id="local-circle">
					<a className='circ-link' onClick = {() => window.open('https://github.com/UrbanGrizzly/LetsDoLunch', '_blank')}>Local-Spot</a>
				</div><br/>
				<div id='local-desc'> 
					<h4 className='desc1'>Venue Recommendation with AI</h4><br/>
					<h5 className='desc2'>A decision engine that learns user preferences and recommends attractions based on user's behavior and history.</h5> 
				</div>
			</div>
		)
	}
}

export default Local;