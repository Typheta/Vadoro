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

    const [flipCount, setFlipCount] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
        setFlipCount(flipCount + 1);
    };

    useEffect(() => {
        if (flipCount === 7) {
            const hero = document.querySelector(".hero");
            hero.classList.add('spin');
            const onAnimationEnd = () => {
                hero.classList.remove('spin');
            };
            hero.addEventListener('animationend', onAnimationEnd);
            return () => {
                hero.removeEventListener('animationend', onAnimationEnd);
            };
        }
    }, [flipCount]);

    return (
        <div className={`hero ${isFlipped ? 'flip' : ''}`}>
            <Header />
            <div className="detel">
                <h1>Vadoro offers software and database management services for your business.</h1>
                <p></p>
                <a href="#" onClick={handleColorChange}>Change Website Color</a>
                <a href="#" onClick={toggleFlip}>Flip</a>
                

            </div>
            <div className="images">
                <img src={shape} alt="Shape" className="shape" />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
