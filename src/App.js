import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import Projects from './Projects.js'; 
import About from './About.js'

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
  
        {/* Set up the Router */}
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        
  
        <div className="nav">
          {/* <img src={logo} className="logo-image" alt="Logo Image" /> */}
          <div className="nav-sub">
                                          
            {/* Set up the Links */}
            <Link to="/" className="item">About</Link>
            <Link to="/projects" className="item">Projects</Link>
            <a href="https://github.com/AlexQ6" className="item">GitHub</a>
            <a href="https://linkedin.com/in/alex-qiang" className="item">LinkedIn</a>
            
          </div>
        </div>
      </div>
    </BrowserRouter>
  );  
}
export default App;
