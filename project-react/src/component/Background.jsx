import React from 'react';
import '../App.css';
import '../css/website.css';
import Background from '../img/background.jpg';

function Header() {
    return (
        <div className="background" style={{ backgroundImage: `url(${Background})` }}>
            <div className="color-overlay"></div>
        </div>
    );
}

export default Header;
