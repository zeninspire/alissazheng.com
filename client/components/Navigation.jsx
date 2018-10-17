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
                        <a onClick={() => browserHistory.push("/about")}>Alissa's</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Nav>
                    <NavItem eventKey={1} href="#" onClick={() => browserHistory.push("/about")}>About Me</NavItem>
                    </Nav>
                </Navbar>
			</div>
		)
	}
}

export default Navigation;
