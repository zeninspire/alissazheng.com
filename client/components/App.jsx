import React, { Component } from 'react';
import Count from './Countdown.jsx';
import Navigation from './Navigation.jsx'

class App extends Component {
	render () {
		return (
			<div>
				<Navigation />
				Welcome to Alissa's Portfolio!<br/>
		        {this.props.children}
			</div>
		)
	}
}

export default App;
