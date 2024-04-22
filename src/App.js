import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import shape from './shape.png';
import './App.css';
import Home from './Home.js';
import About from './About.js';
import Portfolio from './Portfolio';



<Router>
      <div className="App">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Routes>
      </div>
    </Router>

function App() {
  const handleColorChange = () => {
    const userColor = prompt("Enter a color (e.g., 'red', '#00ff00', 'rgb(255, 0, 0)'):");
    const hero = document.querySelector(".hero");
    if (userColor) {
      hero.style.backgroundColor = userColor;
    }
  };


  return (


    <div>
      <div className="hero">
        <nav>
          <img src={logo} alt="Logo" className="logo" />
          <ul>
            <li><a href="Home">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="/Portfolio">Portfolio</a></li>
            <li><a href="/Services">Services</a></li>
            <li><a href="https://en.wikipedia.org/wiki/List_of_largest_technology_companies_by_revenue">Customers</a></li>
          </ul>
        </nav>
        <div className="detel">
          <h1>Vadoro offers software and database management services for your business.</h1>
          <p></p>
          <a href="#" onClick={handleColorChange}>Change Website Color</a>
        </div>
      </div>
      <div className="images">
        <img src={shape} alt="Shape" className="shape" />
      </div>
      <footer id="footerarea">
        <div id="footerheading">
          <div id="a">Resources</div>
          <div id="b">
            Contact Us
            <ul style={{ listStyle: 'none' }}>
              <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Support@vadora.com</a></li>
              <li>229-456-7545</li>
            </ul>
          </div>
        </div>
        <div id="copyright">
          &copy; Vadaro 2024
        </div>
      </footer>
    </div>
  );
}

export default App;