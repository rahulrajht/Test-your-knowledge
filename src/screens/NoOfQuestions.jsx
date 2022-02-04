import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import Steps from "../components/Steps";
import {useNavigate } from "react-router-dom";
import "../styles/screens.css";
import {useDispatch} from "react-redux" ;
import { saveNoQusDetails } from "../actions/quizAction";

function NoOfQuestions() {

    const navigate = useNavigate ()
    const dispatch = useDispatch()

    function selectNoOfQuestion(n){
        dispatch(saveNoQusDetails(n))
        navigate('/quiz', { replace: true })
    }

  return (
    <FormContainer>
      <Steps step1 step2 step3/>
      <h2 className="ms-4">Select Question Length</h2>
      <Container className="mt-5">
        <Row>
          <Col>
            <Button onClick={()=> selectNoOfQuestion(10)} className="text-center btn p-3 bg-color" >10 Question - 5 Minute</Button>
          </Col>
          <Col>
          <Button onClick={()=> selectNoOfQuestion(20)} className="text-center btn p-3 bg-color">20 Question - 10 Minute</Button>
          </Col>
          <Col>
         <Button onClick={()=> selectNoOfQuestion(30)} className="text-center  btn p-3 bg-color">30 Question - 30 Minute</Button>
          </Col>
        </Row>
      </Container>
    </FormContainer>
  );
}

export default NoOfQuestions;
