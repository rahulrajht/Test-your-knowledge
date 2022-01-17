import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/steps.css"
const Steps = ({ step1, step2, step3 }) => {
  return (
    <Nav className="justify-content-center mb-4 mt-5">
      <Nav.Item>
        {step1 ? (
          <Link className="link" to="/step1"> STEP 1 </Link>
        ) : (
          <Nav.Link disabled>STEP 1</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <Link className="link" to="/step2">STEP 2</Link>
        ) : (
          <Nav.Link disabled>STEP 2</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <Link className="link" to="/step3">STEP 3 </Link>
        ) : (
          <Nav.Link disabled>STEP 3</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default Steps;
