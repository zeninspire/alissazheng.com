import React, { Component } from 'react';
import Local from './projects/Local.jsx';
import Trivia from './projects/Trivia.jsx';
import Dating from './projects/Dating.jsx';

class Project extends Component {
	render () {
		return (
			<div className="project">
				<Local />
				<Trivia />
				<Dating />
			</div>
		)
	}
}

export default Project;
