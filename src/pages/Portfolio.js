import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Calc from '../calc.png'
import '../style.css';

function Portfolio() {
    return (
        <div className="hero">
            <Header />
            <div className="detel">
                <h2>
                    <ul>
                        <li><a href="https://github.com/Typheta/Java-GUI-Calculator">GUI CALCULATOR</a></li>
                        <li><a href="https://github.com/Typheta/Database-Project">STUDENT INFORMATION SYSTEM</a></li>
                    </ul>
                </h2>
                <p></p>
                {/* You can add additional portfolio items here */}
            </div>
            <div className="images">
            <img src={Calc} alt="calc" className="calc" />
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;
