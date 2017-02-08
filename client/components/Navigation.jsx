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
                        <a onClick={() => browserHistory.push("/")}>Alissa's</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Nav>
                    <NavItem eventKey={1} href="#" onClick={() => browserHistory.push("/about")}>About Me</NavItem>
                    <NavItem eventKey={2} onClick={() => browserHistory.push("/portfolio")}>Portfolio</NavItem>
                    <NavDropdown eventKey={3} title="Playground" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action1</MenuItem>                        
                    </NavDropdown>
                    </Nav>
                </Navbar>
			</div>
		)
	}
}

export default Navigation;
