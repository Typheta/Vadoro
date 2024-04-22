import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import shape from '../shape.png'
import fetchArticles from '../components/NewsAPI'
import '../style.css'

function Services() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch news articles when the component mounts
        fetchArticles()
            .then(data => setArticles(data.articles))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div className="hero">
            <Header />
            <div className="detel">
              
            </div>
            <div className="images">
                <img src={shape} alt="Shape" className="shape" />
            </div>
            <div className="news">
                <h2>Latest News</h2>
                <ul>
                {articles.map((article, index) => (
                        <li key={index}>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">
                                <h3 className="article-title">{article.title}</h3>
                                {article.imageUrl && <img src={article.imageUrl} alt={article.title} className="article-image" />}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default Services;