import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButtonExampleComplex from './sublinks.jsx';

class Links extends Component {
	render () {
		return (
			<div className='Links'>
                <input type="button" value="Alissa's LinkedIn" onClick = {() => window.open('http://www.linkedin.com/in/zeninspire', '_blank')} />
                <input type="button" value="Alissa's GitHub" onClick = {() => window.open('http://www.github.com/zeninspire', '_blank')} />
            </div>
		)
	}
}

export default Links;

// <FlatButtonExampleComplex />
