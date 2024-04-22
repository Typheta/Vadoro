import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import shape from '../shape.png'
import '../style.css'

function About() {
    return (
        <div className="hero">
            <Header />
            <div className="detel">
                <h2>We are a team of experienced engineers and developers that provide custom software services.Our goal <br/>
                    is to enhance our client's business by providing tailored solutions.We have a collective 170 years of <br/>
                    experience developing, deploying, and maintaining business solutions.
                    <br/>
                    <br/>
                    <br/>
                    This is a class project that I hope I am able to build off of and use one day for my own software engineering company.
                </h2>
            </div>
            <div className="images">
                <img src={shape} alt="Shape" className="shape" />
            </div>
            <Footer />
        </div>
    );
}

export default About;
