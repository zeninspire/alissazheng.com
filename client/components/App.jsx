import React, { Component } from 'react';
import Count from './Countdown.jsx';

class App extends Component {
	render () {
		return (
			<div className='col-md-6 col-md-offset-3'>
				Welcome to Alissa's Portfolio!
				<br/><Count />
		        {this.props.children}
			</div>
		)
	}
}

export default App
