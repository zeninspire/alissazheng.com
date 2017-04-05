import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

class Links extends Component {
	render () {
		return (
			<div id="link-banner" className='col s12 m12 l12 center'>
                <a className='links' href='http://www.linkedin.com/in/zeninspire'><img className="responsive-img" src="http://siteassets.pagecloud.com/dogtv/images/3-ID-1a248a41-0a11-4af2-ccff-d9c7aa30fdec.png?nocache=293fc05f-4626-4525-ea2c-8706b48a545b" /></a>
                <a className='links' href='http://www.github.com/zeninspire'><img className="responsive-img" src="http://www.citi.com/ventures/images/logos/linkedin.png" /></a>
            </div>
		)
	}
}

export default Links;
