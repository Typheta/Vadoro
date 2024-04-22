import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import shape from '../shape.png'
import '../style.css'

function Services() {
    return (
        <div className="hero">
            <Header />
            <div className="detel">
                <h1>Our Services</h1>
                <p>We offer a wide range of software development services tailored to meet the needs of businesses of all sizes:</p>
                <ul>
                    <li>Custom Software Development</li>
                    <li>Web Application Development</li>
                    <li>Mobile App Development (iOS and Android)</li>
                    <li>Database Design and Development</li>
                    <li>UI/UX Design</li>
                    <li>Quality Assurance and Testing</li>
                    <li>Software Maintenance and Support</li>
                    <li>Cloud Computing Solutions</li>
                    <li>Enterprise Resource Planning (ERP) Solutions</li>
                    <li>Consulting and IT Strategy</li>
                </ul>
                <p>Contact us today to discuss how we can help your business succeed!</p>     
            </div>
            <div className="images">
                <img src={shape} alt="Shape" className="shape" />
            </div>
            <Footer />
        </div>
    );
}

export default Services;