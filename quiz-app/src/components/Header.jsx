import React, { useEffect , useState} from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/header.css";
import { useSelector } from "react-redux";
import Countdown from "react-countdown";
function Header() {
  const quizDetails = useSelector((state) => state.quizReducer);

  const {score} = useSelector((state) => state.scoreReducer);

  return (
    <Navbar className="navbar py-4" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className="text-white fw-bold">
          Test Your Knowledge
        </Navbar.Brand>
        <Nav>
          <Nav.Link className="text-white">Score : {score} points</Nav.Link>
          <Nav.Link className="text-white">Time Left 00 : 00  </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
