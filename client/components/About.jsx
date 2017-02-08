import React, { Component } from 'react';
import Links from './Links.jsx';

class About extends Component {
	render () {
		return (
			<div>
                You are in the About Me section of the website!
				<Links />
		        {this.props.children}
			</div>
		)
	}
}

export default About;
