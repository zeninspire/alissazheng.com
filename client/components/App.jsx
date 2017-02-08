import React, { Component } from 'react';
import Count from './Countdown.jsx';
import Links from './Links.jsx';

class App extends Component {
	render () {
		return (
			<div>
				Welcome to Alissa's Portfolio!<br/>
		        {this.props.children}
			</div>
		)
	}
}

export default App;
