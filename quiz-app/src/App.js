import Header from "./components/Header";
import HomePage from "./components/HomePage";
import './styles/App.css'
import {Routes ,Route, Link } from 'react-router-dom'
import Language from "./screens/Language";
import Level from "./screens/Level";
import NoOfQuestions from "./screens/NoOfQuestions";
import Question from "./screens/Question";
import Score from "./screens/Score";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element = {<HomePage/>}/>
        <Route exact path="/step1" element = {<Language/>}/>
        <Route exact path="/step2" element = {<Level/>}/>
        <Route exact path="/step3" element = {<NoOfQuestions/>}/>
        <Route exact path="/quiz" element = {<Question/>}/>
        <Route exact path="/score" element = {<Score/>}/>

      </Routes>
    </>
  );
}

export default App;
