import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import Steps from "../components/Steps";
import {useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../styles/screens.css";
import { saveLanguageDetails } from "../actions/quizAction";

function Language() {

    const dispatch = useDispatch()
    const navigate = useNavigate ()

    function selectLanguage(lang){
        
        dispatch(saveLanguageDetails(lang))
        navigate('/step2', { replace: true })
    }

  return (
    <FormContainer>
      <Steps step1 />
      <h2 className="ms-4">Choose Language</h2>
      <Container className="mt-5">
        <Row>
          <Col>
            <Image onClick={()=> selectLanguage("JS")} className="img" src={"https://bit.ly/3Fwm2Co"} />
          </Col>
          <Col>
            <Image onClick={()=> selectLanguage("REACT")} className="img ms-4" src={"https://bit.ly/3fwSQ3z"} />
          </Col>
          <Col>
            <Image onClick={()=> selectLanguage("HTMLCSS")} className="img ms-5" src={"https://bit.ly/3KjyfO8"} />
          </Col>
        </Row>
      </Container>
    </FormContainer>
  );
}

export default Language;
