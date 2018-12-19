import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
	render () {
		return (
			<div>
                <Navbar fluid>
                    <Navbar.Header>
                        <Button bsStyle="success">
                        <a onClick={() => browserHistory.push("/")}>Menu</a>
                        </Button>
                    </Navbar.Header>
                    <Nav>
                    <Button bsStyle="primary" eventKey={1} href="#" onClick={() => browserHistory.push("/about")}>About</Button> 
                    <Button bsStyle="primary" eventKey={3} href="#" onClick={() => browserHistory.push("/links")}>Links</Button> 
                    <Button bsStyle="primary" eventKey={3} href="#" onClick={() => browserHistory.push("/playground")}>Playground</Button> 
                    <Button bsStyle="primary" eventKey={4} href="#" onClick={() => browserHistory.push("/gameplan")}>Gameplan</Button>
                    </Nav>
                </Navbar>
			</div>
		)
	}
}

export default Navigation;
