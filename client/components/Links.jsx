import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

class Links extends Component {
	render () {
		return (
			<div id="link-banner" className='col-lg-12 col-md-12 col-sm-12 col-xs-12 center'>
                <a className='links' href='http://www.linkedin.com/in/zeninspire' target="_blank"><img className="responsive-img" src="http://www.citi.com/ventures/images/logos/linkedin.png" /></a>
                <a className='links' href='https://www.instagram.com/zhengria/' target="_blank"><img className="responsive-img" src="https://siteassets.pagecloud.com/dogtv/images/3-ID-1a248a41-0a11-4af2-ccff-d9c7aa30fdec.png?nocache=293fc05f-4626-4525-ea2c-8706b48a545b" /></a>
                <a className='links' href='http://www.github.com/zeninspire' target="_blank"><img className="responsive-img" src="https://diversity.github.com/assets/svg/mark-github.svg" /></a>
            </div>
		)
	}
}

export default Links;
