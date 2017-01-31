import React, { Component } from 'react';
import Count from './Countdown.jsx';

class App extends Component {
	render () {
		return (
			<div>
				Welcome to Alissa's Portfolio!
				<Count />
		        {this.props.children}
			</div>
		)
	}
}

export default App
