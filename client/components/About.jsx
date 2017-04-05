import React, { Component } from 'react';
import Links from './Links.jsx';
import { Button } from 'react-bootstrap';

class About extends Component {
	render () {
		return (
			<div className="aboutAll">
				<div className="aboutBackground">
					<ul className="AboutContent">
						<img className="profilepic" src="./img/profile.jpg" /><br/>
						<Button bsStyle='info' onClick = {() => window.open('https://drive.google.com/open?id=0Bx8IDkDn2v9Xa1dzekdlc014cms', '_blank')}>Resume</Button><br/>
						Full-stack Software Engineer. <br/>
						Solves problems from a user's perspective. <br/>
						Builds web apps using JavaScript, Node.js, Express.js. <br/>
						Delivers seamless user experience via React/Redux, Angular, Vue.js, etc. <br/>
					</ul>
				</div>
		        {this.props.children}
			</div>
		)
	}
}

export default About;
