import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';

const Wait = () => {
	return (
		<div className='col-md-6 col-md-offset-3'>
			Alissa's Portfolio is launching on 2/7/2017! See you then!
		</div>
	)
}

export default (
	<Route path ='' component={App}>
		<Route path='/' component={Wait} />
	</Route>
)
