import React, { Component } from 'react';

class Dating extends Component {
	render () {
		return (
			<div id="dating">
                <a id='dating-link' onClick = {() => window.open('http://bash-to-the-dating.herokuapp.com', '_blank')}>Video Dating</a>
			</div>
		)
	}
}

export default Dating;