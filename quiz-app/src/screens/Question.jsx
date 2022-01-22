import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import "../styles/questions.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  ADVANCE_JS_QUESTIONS,
  Easy_JS_Questions,
  MEDIUM_JS_QUESTIONS,
} from "../Questions/javascript";
import { useEffect } from "react";
import { incrementScore } from "../actions/quizAction";
import { useNavigate } from "react-router-dom";
import {
  ADVANCE_REACT_QUESTIONS,
  EASY_REACT_QUESTIONS,
  MEDIUM_REACT_QUESTIONS,
} from "../Questions/reactQuestion";
import { EASY_HTML_QUESTIONS,MEDIUM_HTML_QUESTIONS,ADVANCE_HTML_QUESTIONS } from "../Questions/htmlQuestion";
function Question() {
  const sample = [
    {
      q: "Sample Question",
      options: ["A", "B", "C", "D"],
      ans: 5,
    },
  ];
  const [questions, setquestions] = useState(sample);
  const quizReducer = useSelector((state) => state.quizReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { language, level } = quizReducer;

  let [count, setCount] = useState(0);

  function nextQuestion(i) {
    if (questions[0].q === sample[0].q) {
      return;
    }
    if (questions.length - 1 === count) {
      if (questions[count].ans === i + 1) {
        dispatch(incrementScore());
      }
      navigate("/score", { replace: true });
    } else if (questions[count].ans === i + 1) {
      dispatch(incrementScore());
    }
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    if (language === "JS" && level === 1) {
      setquestions(Easy_JS_Questions);
    }
    if (language === "JS" && level === 2) {
      setquestions(MEDIUM_JS_QUESTIONS);
    }
    if (language === "JS" && level === 3) {
      setquestions(ADVANCE_JS_QUESTIONS);
    }
    if (language === "REACT" && level === 1) {
      setquestions(EASY_REACT_QUESTIONS);
    }
    if (language === "REACT" && level === 2) {
      setquestions(MEDIUM_REACT_QUESTIONS);
    }
    if (language === "REACT" && level === 3) {
      setquestions(ADVANCE_REACT_QUESTIONS);
    }
    if(language === "HTML" && level === 1 ){
      setquestions(EASY_HTML_QUESTIONS)
    }    
    if(language === "HTML" && level === 2 ){
      setquestions(MEDIUM_HTML_QUESTIONS)
    }    
    if(language === "HTML" && level === 3 ){
      setquestions(ADVANCE_HTML_QUESTIONS)
    }
  }, [language, level]);

  return (
    <FormContainer>
      <Container className="mt-5 text-center">
        <Row>
          <Col className="question">
            {count + 1} {questions?.[count]?.q}
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 text-center">
        <Row className="mt-5">
          <Col onClick={() => nextQuestion(0)} className="options">
            {questions[count].options[0]}
          </Col>
          <Col onClick={() => nextQuestion(1)} className="options">
            {questions[count].options[1]}
          </Col>
        </Row>

        <Row className="mt-5">
          <Col onClick={() => nextQuestion(2)} className="options">
            {questions[count].options[2]}
          </Col>
          <Col onClick={() => nextQuestion(3)} className="options">
            {questions[count].options[3]}
          </Col>
        </Row>
      </Container>
    </FormContainer>
  );
}

export default Question;
