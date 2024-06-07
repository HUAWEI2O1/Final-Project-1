import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../css/website.css';
import Logo from '../img/LOGO.png';

function Header() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="header-container">
            <div className="topnav">
                <a href="#" onClick={() => scrollToSection('section1')}>Home</a>
                <Link to="/RecipesPage">Recipes</Link>
                <a href="#" onClick={() => scrollToSection('section3')}>About</a>
                <a href="#" onClick={() => scrollToSection('section4')}>Contact</a>
            </div>

            <div className="logo-container">
                <img src={Logo} className="logo" width="95" height="95" alt="Logo" />
            </div>
        </div>
    );
}

export default Header;
