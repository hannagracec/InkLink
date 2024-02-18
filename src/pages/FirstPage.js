import React from 'react';
import './FirstPage.css';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'; // Import the logo image
import arrow from './images/arrow.svg';

export default function FirstPage() {
    return (
        <div className="first-page-container">
            <div className="content">
                <p className="slide-in">Hello, User</p>
                <h1 className='welcome'>Welcome to App</h1>
                <Link to="/Login" className="sign-in-button">
                    <p className='signin-text'>Get Started</p>
                    <img src={arrow} alt="arrow"/>
                </Link>
            </div>
        </div>
    );
}
