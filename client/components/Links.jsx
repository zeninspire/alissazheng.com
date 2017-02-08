import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

class Links extends Component {
	render () {
		return (
			<div className='Links'>
                <Button onClick = {() => window.open('http://www.linkedin.com/in/zeninspire', '_blank')}>Alissa's LinkedIn</Button>
                <Button onClick = {() => window.open('http://www.github.com/zeninspire', '_blank')}>Alissa's GitHub</Button>
                <Button onClick = {() => window.open('https://drive.google.com/open?id=0Bx8IDkDn2v9Xa1dzekdlc014cms', '_blank')}>Alissa's Resume</Button>
            </div>
		)
	}
}

export default Links;

// <FlatButtonExampleComplex />
