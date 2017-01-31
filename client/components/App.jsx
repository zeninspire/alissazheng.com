import React, { Component } from 'react';
// import Navbar from './Navbar.jsx';

class App extends Component {
	render () {
		return (
			<div>
				Welcome to Alissa's Portfolio!
        {this.props.children}
			</div>
		)
	}
}

export default App
