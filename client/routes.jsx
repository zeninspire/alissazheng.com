import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';

const Wait = () => {
	return (
		<div>
			Launching on 02/07/2017! Thank you for your patience. See you then!
		</div>
	)
}

export default (
	<Route path ='' component={App}>
		<Route path='/' component={Wait} />
	</Route>
)
