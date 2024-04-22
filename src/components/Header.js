import React from 'react'
import logo from '../logo.png'

function Header() {
    return (
        <nav>
            <img src={logo} alt="Logo" className="logo" />
            <ul>
                <li><a href="/home">HOME</a></li>
                <li><a href="/about">ABOUT</a></li>
                <li><a href="/portfolio">PORTFOLIO</a></li>
                <li><a href="/services">SERVICES</a></li>
                <li><a href="https://en.wikipedia.org/wiki/List_of_largest_technology_companies_by_revenue">CUSTOMERS</a></li>
                <li><a href="/news">NEWS</a></li>
            </ul>
        </nav>
    );
}

export default Header;