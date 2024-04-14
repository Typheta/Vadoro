import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import shape from './shape.png';
import './App.css';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Portfolio() {
  return <h2>Portfolio</h2>;
}

function Services() {
  return <h2>Services</h2>;
}

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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/services">Services</a></li>
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