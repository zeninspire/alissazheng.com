import React, { Component } from 'react';
import Count from './Countdown.jsx';
import Links from './Links.jsx';
import Navigation from './Navigation.jsx'

class App extends Component {
	render () {
		return (
			<div>
				Welcome to Alissa's Portfolio!<br/>
				<Navigation />
		        {this.props.children}
			</div>
		)
	}
}

export default App;
