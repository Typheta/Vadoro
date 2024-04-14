import React from 'react';
import logo from './logo.png';
import shape from './shape.png';
import './style.css';

function Portfolio() {
  return (
    <div className="hero">
      <nav>
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/portfolio">PORTFOLIO</a></li>
          <li><a href="/services">SERVICES</a></li>
          <li><a href="https://en.wikipedia.org/wiki/List_of_largest_technology_companies_by_revenue">CUSTOMERS</a></li>
        </ul>
      </nav>
      <div className="detel">
        <h2>
          <ul>
            <li><a href="https://github.com/Typheta/Java-GUI-Calculator">GUI CALCULATOR</a></li>
            <li><a href="https://github.com/Typheta/Database-Project">STUDENT INFORMATION SYSTEM</a></li>
          </ul>
        </h2>
        <p></p>
      </div>
      <div className="images">
        <img src={shape} alt="Shape" className="shape" />
      </div>
      <footer id="footerarea">
        <div id="footerheading">
          <div id="a">Resources</div>
          <div id="b">Contact Us
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

export default Portfolio;
