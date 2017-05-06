import React, { Component } from 'react';
import Links from './Links.jsx';
import { Button } from 'react-bootstrap';

class About extends Component {
	render () {
		return (
			<div className="about col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<ul className="AboutContent">
						<img className="profilepic" src="./img/profile.jpg" />&nbsp;&nbsp;&nbsp;
						<Button bsStyle='info' onClick = {() => window.open('https://drive.google.com/file/d/0Bx8IDkDn2v9XMXF3aTNBcFRPbk0/view?usp=sharing', '_blank')}>Resume</Button><br/>
						
						<div className='about-text'>
							<h3>Software Engineer | Full Stack </h3><br/>
							<h4 id="about-second">React/Redux, Angular, Node.js, Python</h4><br/>
						</div>
						<h4>
						Solves problems from a user's perspective. <br/>
						Builds web apps using JavaScript, Node.js, Express.js. <br/>
						Delivers seamless user experience via React/Redux, Angular, Vue.js, etc. <br/>
						</h4>
					</ul>
		        {this.props.children}
			</div>
		)
	}
}

export default About;
