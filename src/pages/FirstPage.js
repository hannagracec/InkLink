import React from 'react';
import './FirstPage.css';

export default function FirstPage() {
    return (
        <div className="first-page-container">
            <div className="background-shapes"></div>
            <div className="content">
                <h1 className="slide-in">Welcome to App</h1>
                <button className="sign-in-button">Sign In</button>
            </div>
        </div>
    );
}


