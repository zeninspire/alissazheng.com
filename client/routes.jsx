import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';

const Wait = () => {
	return (
		<div>
			...
		</div>
	)
}

export default (
	<Route path ='' component={App}>
		<Route path='/' component={Wait} />
	</Route>
)
