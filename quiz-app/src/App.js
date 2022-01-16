import Header from "./components/Header";
import HomePage from "./components/HomePage";
import './styles/App.css'
import {Routes ,Route, Link } from 'react-router-dom'
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element = {<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
