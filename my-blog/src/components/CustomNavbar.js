import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
    const brand = "</ MPhong >";
    return (
        <Navbar bg="light" data-bs-theme="light" sticky='top'>
            <Container>
                <Navbar.Brand href="#">{brand}</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Blog</Nav.Link>
                    <Nav.Link href="#">Contacts</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;