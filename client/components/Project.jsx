import React, { Component } from 'react';
import Local from './projects/Local.jsx';
import Trivia from './projects/Trivia.jsx';
import Dating from './projects/Dating.jsx';

class Project extends Component {
	render () {
		return (
			<div className="project col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<Local />
				<Trivia />
				<Dating />
			</div>
		)
	}
}

export default Project;


