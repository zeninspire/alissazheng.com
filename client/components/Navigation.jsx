import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Button, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
	render () {
		return (
			<div>
                <Navbar fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a onClick={() => browserHistory.push("/")}>Menu</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                    <NavItem eventKey={1} href="#" onClick={() => browserHistory.push("/about")}>About</NavItem>
                    <NavItem eventKey={3} href="#" onClick={() => browserHistory.push("/links")}>Links</NavItem>
                    <NavItem eventKey={3} href="#" onClick={() => browserHistory.push("/playground")}>Playground</NavItem>
                    <NavItem eventKey={4} href="#" onClick={() => browserHistory.push("/gameplan")}>Gameplan</NavItem>
                    </Nav>
                </Navbar>
			</div>
		)
	}
}

export default Navigation;
