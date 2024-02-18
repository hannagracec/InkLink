import React from 'react';
import './FirstPage.css';
import { Link } from 'react-router-dom';

export default function FirstPage() {
    return (
        <div className="first-page-container">
            <div className="background-shapes"></div>
            <div className="content-1">
                <h1 className="slide-in">Welcome to App</h1>
                <Link to="/Login" className="sign-in-button">Sign In</Link>
            </div>
        </div>
    );
}


