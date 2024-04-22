import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import fetchArticles from '../components/NewsAPI' // Corrected import path
import shape from '../shape.png'
import '../style.css'

function Home() {
    const handleColorChange = () => {
        const userColor = prompt("Enter a color (e.g., 'red', '#00ff00', 'rgb(255, 0, 0)'):");
        const hero = document.querySelector(".hero");
        if (userColor) {
            hero.style.backgroundColor = userColor;
        }
    };

    return (
        <div className="hero">
            <Header />
            <div className="detel">
                <h1>Vadoro offers software and database management services for your business.</h1>
                <p></p>
                <a href="#" onClick={handleColorChange}>Change Website Color</a>
            </div>
            <div className="images">
                <img src={shape} alt="Shape" className="shape" />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
