import React from 'react';
import './FirstPage.css';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'; // Import the logo image


export default function FirstPage() {
    // Function to handle logo click
    const handleLogoClick = () => {
        const logoContainer = document.querySelector('.logo-container');
        const sloganContainer = document.querySelector('.slogan-container');
        logoContainer.classList.toggle('move-left');
        sloganContainer.classList.toggle('show'); // Toggle visibility of slogan
    };
    
    return (
        <div className="first-page-container">
            <div className="background-shapes"></div>
            <div className="content">
                <h1 className="slide-in"><strong>Welcome to App</strong></h1>
                <div className="slideshow">
                    <img src={logo} alt="App 1" />
                    <img src={logo} alt="App 2" />
                    <img src={logo} alt="App 3" />
                </div>
                <Link to="/Login" className="sign-in-button">Sign In</Link>
                <div className="logo-container" onClick={handleLogoClick}>
                    <img src={logo} alt="Logo" className="logo" /> {/* Use the imported logo */}
                    <p className="slogan-container slogan">Creative Slogan</p>
                </div>
            </div>
        </div>
    );
}
