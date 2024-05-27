import React from 'react';
import '../App.css';
import '../css/website.css'; // You can remove this line if not used
import Logo from '../img/LOGO.png'; // Adjust the path to match your file structure

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
                <a href="#" onClick={() => scrollToSection('section2')}>Recipes</a>
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
