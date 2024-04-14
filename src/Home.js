import React from 'react';
import logo from './logo.png';
import shape from './shape.png';
import './style.css';

function Home() {
  const handleColorChange = () => {
    const userColor = prompt("Enter a color (e.g., 'red', '#00ff00', 'rgb(255, 0, 0)'):");
    const hero = document.querySelector(".hero");
    if (userColor) {
      hero.style.backgroundColor = userColor;
    }
  };

  const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="hero">
      <nav>
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/portfolio">PORTFOLIO</a></li>
          <li><a href="#">SERVICES</a></li>
          <li><a href="https://en.wikipedia.org/wiki/List_of_largest_technology_companies_by_revenue">CUSTOMERS</a></li>
        </ul>
      </nav>
      <div className="detel">
        <h1>Vadoro offers software and database management services for your business.</h1>
        <p></p>
        <a href="#" onClick={handleColorChange}>Change Website Color</a>
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

export default Home;
