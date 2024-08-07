import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import {BrowserRouter as Router} from 'react-router-dom';
import Portfolio from './Components/Portfolio/portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <About/>
        <Portfolio/>
        <Contact/>
        
      </Router>
     
    </div>
  );
}

export default App;
