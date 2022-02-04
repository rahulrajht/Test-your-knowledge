import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import Steps from "../components/Steps";
import {useNavigate } from "react-router-dom";
import "../styles/screens.css";
import {useDispatch} from "react-redux" ;
import { saveLevelDetails } from "../actions/quizAction";
function Level() {

    const navigate = useNavigate ()
    const dispatch = useDispatch()

    function selectLevel(level){
        dispatch(saveLevelDetails(level))
        navigate('/quiz', { replace: true })
    }

  return (
    <FormContainer>
      <Steps step1 step2/>
      <h2 className="ms-4">Choose Level</h2>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card.Title onClick={()=> selectLevel(1)} className="text-center p-3 bg-color" >Easy</Card.Title>
          </Col>
          <Col>
          <Card.Title onClick={()=> selectLevel(2)} className="text-center p-3 bg-color">Medium</Card.Title>
          </Col>
          <Col>
         <Card.Title onClick={()=> selectLevel(3)} className="text-center p-3 bg-color">Hard</Card.Title>
          </Col>
        </Row>
      </Container>
    </FormContainer>
  );
}

export default Level;
