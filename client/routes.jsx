import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App.jsx';
import About from './components/About.jsx';
import Project from './components/Project.jsx';
import Links from './components/Links.jsx';
import Playground from './components/Playground.jsx';

const Wait = () => {
	return (
		<div>
			...
		</div>
	)
}

export default (
	<Route path ='/' component={App}>
		<Route path='/about' component={About} />		
		<Route path='/project' component={Project} />		
		<Route path='/links' component={Links} />		
	</Route>
)
