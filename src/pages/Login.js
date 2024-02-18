import React from 'react';
import './Login.css'; // Import CSS file for styling
import logo from './images/logo.png'; 
import { Link } from 'react-router-dom';

export default function Login() {
    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Accessing form elements directly
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        // Here you can implement your logic for authenticating the user
        console.log("Username:", username);
        console.log("Password:", password);
        // Clearing form fields after submission
        event.target.elements.username.value = '';
        event.target.elements.password.value = '';
    }

    return (
        <div className="login-container">
            <div className = "login-logo">

            </div>
            <img src={logo} alt="Logo" className="login-logo" /> {/* Insert the logo image */}
            <div className = "login-header">
            <h2> Sign-In  </h2>
            </div>
           
            <form onSubmit={handleSubmit} className="login-form">
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        required 
                        className="login-input"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        className="login-input"
                    />
                </div>
                <Link className="link" to="/Home">
                    <div className="login-button">Login</div>
                </Link>
            </form>
            <div className="sign-up-link">
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </div>
    );
}
