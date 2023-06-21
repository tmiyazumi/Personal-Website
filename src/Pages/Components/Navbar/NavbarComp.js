import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import linkedin from '../../../Assets/linkedin.png';
import './NavBarComp.css';

export default class NavbarComp extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/" >Taise Miyazumi's Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>    
                        <Nav.Link href="/experiences">Experiences</Nav.Link>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/taisemiyazumi/">
                            <img src={linkedin} alt="linkedin" width="30" height="30" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
