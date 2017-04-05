import React, { Component } from 'react';

class Local extends Component {
	render () {
		return (
			<div id="local">
                <a onClick = {() => window.open('http://www.local-spot.com', '_blank')}>Local-Spot</a>
			</div>
		)
	}
}


export default Local;