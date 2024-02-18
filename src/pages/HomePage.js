import Profile from "../pages/images/profile.jpg";
import "./HomePage.css";
import Sunny from "../pages/images/Sunny.svg";
import Book from "../pages/images/Book-open.svg";
import Message from "../pages/images/Comment.svg";
import Location from "../pages/images/Location.svg";
import Walking from "../pages/images/exercise_walking.svg"
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="body-home">
      <div className="header-home">
        <img className="profile-home" src={Profile} alt="user profile"/>
      </div>
      <div>
        <div className="hello-user">
          <p className="hello">Hello,</p>
          <h1 className="user-name">Shenice</h1>
        </div>
      </div>
      <div className="content-home">
        <div className="weather">
          <div className="weather-icon">
            <h3>Current Weather</h3>
            <img className="sunny" src={Sunny} alt="sunny logo" />
            <p>3°C</p>
          </div>
          <div className="weather-details">
            <div className="top-row">
              <div className="w-type">
                <div className="w-text">
                  <h3>Wind:</h3>
                  <p>8 km/h</p>
                </div>
              </div>
              <div className="w-type">
                <div className="w-text">
                  <h3>Humidity:</h3>
                  <p>35%</p>
                </div>
              </div>
            </div>
            <div className="bottom-row">
              <div className="w-type">
                <div className="w-text">
                  <h3>Pressure:</h3>
                  <p>102.2 kPa</p>
                </div>
              </div>
              <div className="w-type">
                <div className="w-text">
                  <h3>Air Quality:</h3>
                  <p>3 (Low Risk)</p>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className="book-friend">
          <Link to="/books" className="link books">
            <img className="icon" src={Book} alt="book icon"/>
            <p>My Books</p>
          </Link>
          <Link to="/friends" className="link friends">
            <img className="icon" src={Message} alt="speech bubble icon"/>
            <p>My Friends</p>
          </Link>
        </div>
        <Link to="/map" className="link map">
          <img className="location" src={Location} alt="location icon"/>
          <p>Go To Map</p>
        </Link>
        <div className="steps">
          <div className="step-stuff">
            <img className="walk" src={Walking} alt="walking icon" />
            <div className="step-text">
              <p>Daily Steps</p>
              <p className="num-steps">7,352</p>
            </div>
          </div>
          <div className="bar">
            <progress className="progress-bar" value="70" max="100"></progress>
          </div>
        </div>
      </div>
    </div>
  );
}
  
