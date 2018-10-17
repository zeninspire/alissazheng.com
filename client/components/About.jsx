import React, { Component } from 'react';
import Links from './Links.jsx';
import { Button } from 'react-bootstrap';

class About extends Component {
	render () {
		return (
			<div className="about col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<ul className="AboutContent">
						<img className="profilepic" src="./img/heimlich.png" />&nbsp;&nbsp;&nbsp;
						<div className='about-text'>
						</div>
						<h5>
							Someday I will be a beautiful butterfly, and then everything will be better! 
						</h5>
					</ul>
		        {this.props.children}
			</div>
		)
	}
}

export default About;

//						<Button bsStyle='info' onClick = {() => window.open('https://drive.google.com/file/d/0Bx8IDkDn2v9XMXF3aTNBcFRPbk0/view?usp=sharing', '_blank')}>Resume</Button><br/>
