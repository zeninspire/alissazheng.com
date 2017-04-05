import React, { Component } from 'react';

class Trivia extends Component {
	render () {
		return (
			<div id="trivia">
                <a onClick = {() => window.open('http://bash-to-the-trivia.herokuapp.com', '_blank')}>Trivia</a>
			</div>
		)
	}
}

export default Trivia;