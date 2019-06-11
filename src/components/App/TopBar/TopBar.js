import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function TopBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">MoviePicker</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Favorites</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default TopBar;