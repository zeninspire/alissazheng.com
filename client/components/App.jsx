import React, { Component } from 'react';
import Count from './Countdown.jsx';
import Links from './Links.jsx';

class App extends Component {
	render () {
		return (
			<div>
				Welcome to Alissa's Portfolio!<br/>
				Alissa's Portfolio is launching on 2/7/2017! See you then!<br />
				<Count />
				<Links />
		        {this.props.children}
			</div>
		)
	}
}

export default App;
