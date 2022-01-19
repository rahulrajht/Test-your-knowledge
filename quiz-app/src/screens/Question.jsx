import React from "react";
import { Container , Row , Col} from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import "../styles/questions.css"
import {useSelector , useDispatch} from "react-redux";
import { useState } from "react";
import {Easy_JS_Questions} from "../Questions/javascript"
import { useEffect } from "react";
import { incrementScore } from "../actions/quizAction";
import {useNavigate } from "react-router-dom"; 
function Question() {
    const sample = [{
        q:"Sample Question",
        options:["A","B","C","D"],
        ans:1
    }]
    const [questions, setquestions] = useState(sample)
    const quizReducer = useSelector(state => state.quizReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {language,noofquestions,level} = quizReducer;
  
    let [count , setCount] = useState(0)

    function nextQuestion(i){
        if(questions.length-1 === count){
            console.log("Quiz Completed")
            if(questions[count].ans === i+1){
                dispatch(incrementScore())
                       
            }
            navigate('/score', { replace: true })
        }
        else if(questions[count].ans === i+1){
            dispatch(incrementScore())
                   
        }
        setCount(prev => (prev + 1) )
    }

    useEffect(() => {
        if(language === "JS" && noofquestions === 10 && level === 1){
            setquestions(Easy_JS_Questions)
        }
        
    }, [language,noofquestions,level])
  return (
    <FormContainer>
      <Container className="mt-5 text-center">
        <Row>
          <Col className="question">{count+1} {questions?.[count]?.q}</Col>
        </Row>
      </Container>
      <Container className="mt-5 text-center">
        <Row className="mt-5">
          <Col onClick={()=>nextQuestion(0)} className="options">{questions[count].options[0]}</Col>
          <Col onClick={()=>nextQuestion(1)} className="options">{questions[count].options[1]}</Col>
        </Row>
        <Row className="mt-5">
          <Col onClick={()=>nextQuestion(2)} className="options">{questions[count].options[2]}</Col>
          <Col onClick={()=>nextQuestion(3)} className="options">{questions[count].options[3]}</Col>
        </Row>
      </Container>
    </FormContainer>
  );
}

export default Question;
