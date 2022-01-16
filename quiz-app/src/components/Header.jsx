import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import '../styles/header.css'
function Header() {
    return (
        <Navbar className='navbar py-4' collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand  className='text-white fw-bold'>Test Your Knowledge</Navbar.Brand>
          <Nav >
            <Nav.Link className='text-white'>Score : {10} points</Nav.Link>
            <Nav.Link className='text-white'> Time Left: {20} Min </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Header
