import React, { Component } from 'react';
import Count from './Countdown.jsx';
import Navigation from './Navigation.jsx'
import About from './About.jsx';
import Project from './Project.jsx';
import Links from './Links.jsx';

class App extends Component {
	render () {
		return (
			<div className='app'>
				<div id='top-banner' className='col-lg-12 col-md-12 col-sm-12 col-xs-12'></div>
				<About />
				<Project />
				<Links />
		        {this.props.children}
			</div>
		)
	}
}

export default App;
