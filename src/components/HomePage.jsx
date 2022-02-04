import React, { useEffect } from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { saveLevelDetails } from "../actions/quizAction";
import quizicon from "../images/quizicon.png";
import "../styles/homepage.css";
function HomePage() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(saveLevelDetails(0))
  }, []);
  return (
    <Container>
      <Row className="containers">
        <Col className="mt-5">
          <Card.Img src={quizicon} />
        </Col>
        <Col className="mt-3 pt-3 margin d-flex flex-column">
          <Card.Title className="fs-1 fw-bold">Are you ready ?</Card.Title>
          <Card.Text className="fs-5 fw-normal">
            A quiz or poll at the end of a lesson is a good way to gain a quick
            overview of who needs help and where you could challenge pupils
            further.
          </Card.Text>
          <Card.Text className="fs-5 fw-normal">
            And a quiz is a good way for a pupil to identify and take ownership
            of their knowledge gaps. It’s also a great way to help them to plug
            the gaps to boost their confidence when it comes to formal testing.
          </Card.Text>
          <Link to={"/step1"}>
            <Button className="btn-color mt-3 align-self-center px-5">
              Start
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
