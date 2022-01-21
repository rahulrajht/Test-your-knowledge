import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "../styles/score.css";
import { useSelector } from "react-redux";
import yolo from "../images/yolotube.png"
function Score() {
    const {score} = useSelector((state) => state.scoreReducer);
  return (
    <>
      <Container>
        <Row className="justify-content-md-center text-center mt-5">
          <Col className="column" xs={12} md={8}>
            {" "}
            <h3>Your Total Score is {score} </h3>{" "}
          </Col>
        </Row>
      </Container>
      <Container className="mt-5 pb-2">
          <Row  className="justify-content-center">
        <Col xs={12} md={10}>
          <Card className="d-flex flex-row justify-content-center" style={{  width:"100%" }}>
            <Card.Img variant="top"  src={yolo} />
            <Card.Body className="ms-5 ">
              <Card.Title>YOLO Tube</Card.Title>
              <Card.Text>
                Hey pal! Would you like to improve your knowledge and skills? 
                If yes then don't wait visit this website and improve your competency.
              </Card.Text>
              <Card.Text>Happy Learning !</Card.Text>
              <Button variant="primary"><a className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer" href="https://yolotube.netlify.app">Start Learning </a></Button>
            </Card.Body>
          </Card>
          
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default Score;
