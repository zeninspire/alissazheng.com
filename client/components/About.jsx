import React, { Component } from 'react';
import Links from './Links.jsx';

class About extends Component {
	render () {
		return (
			<div>
				<img className="profilepic" src="./img/profile.jpg" />
				<ul>
				Full-stack Software Engineer. <br/>
				Solves problems from a user's perspective. <br/>
				Builds web apps using JavaScript, Node.js, Express.js. <br/>
				Delivers seamless user experience via React/Redux, Angular, Vue.js, etc. <br/>
				</ul>
				<Links />
		        {this.props.children}
			</div>
		)
	}
}

export default About;
