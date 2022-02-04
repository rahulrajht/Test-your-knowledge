import { Navbar, Container, Nav} from "react-bootstrap";
import "../styles/header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {useLocation} from "react-router";
import Timer from "../components/Timer";

function Header() {
  const quizDetails = useSelector((state) => state.quizReducer);
  const location = useLocation()
  const [timer , setTimer] = useState(0)
  
  useEffect(() => {
    if(quizDetails.level === 1){
      setTimer(5)
    }
    if(quizDetails.level === 2){
      setTimer(10)
    }
    if(quizDetails.level === 3){
      setTimer(20)
    }
  },[quizDetails.level])

  useEffect(() => {
    if(location.pathname === "/score" || location.pathname === "/" ){
      setTimer(0)
    }
  }, [location.pathname])

  return (
    <Navbar className="navbar py-4" collapseOnSelect expand="lg">
      <Container role="button">
        <Link to="/" className="text-decoration-none">
        <Navbar.Brand  className="text-white fw-bold " >
          Test Your Knowledge
        </Navbar.Brand>
        </Link>
        <Nav>
          {/* <Nav.Link className="text-white">Score : {score} points</Nav.Link> */}
          <Nav.Link className="text-white"> 
            {
              timer === undefined || timer ===0 || <Timer time={timer}/> 
            }
           </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Header;
