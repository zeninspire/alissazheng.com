import React, { Component } from 'react';
import Links from './Links.jsx';
import { Button } from 'react-bootstrap';

class About extends Component {
	render () {
		return (
			<div className="about col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<ul className="AboutContent">
						<img className="profilepic" src="./img/profile.jpg" />
						<Button bsStyle='info' onClick = {() => window.open('https://drive.google.com/open?id=0Bx8IDkDn2v9XLXZNVG5CT0lYbXc', '_blank')}>Resume</Button><br/>
						
						<h3>Software Engineer | Full Stack </h3><br/>
						<h4>React/Redux, Angular, Node.js, Python</h4><br/>
						Solves problems from a user's perspective. <br/>
						Builds web apps using JavaScript, Node.js, Express.js. <br/>
						Delivers seamless user experience via React/Redux, Angular, Vue.js, etc. <br/>
					</ul>
		        {this.props.children}
			</div>
		)
	}
}

export default About;
