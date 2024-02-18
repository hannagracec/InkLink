import Man1 from "../pages/FriendsPP/Man1.png";
import Man3 from "../pages/FriendsPP/Man3.png";
import Woman1 from "../pages/FriendsPP/Woman1.png";
import Woman2 from "../pages/FriendsPP/Woman2.png";
import Woman4 from "../pages/FriendsPP/Woman4.png";
import React from 'react';
import './FindFriends.css';
import Search from './images/search.svg';
import { Link } from 'react-router-dom';
import homeIcon from '../pages/images/House.svg';
import mapIcon from '../pages/images/map-black.svg';
import friendIconRed from '../pages/images/group-red.svg'
import bookIcon from '../pages/images/Book.svg'
export default FindFriends;

function FindFriends() {
    return (
        <div>
            {/* Search bar */}
            
            <div className="search-bar">
                
                <input
                    type="text"
                    className="search-input"
                    placeholder="Look for new friends"
                />
                <img className="search-icon" src={Search} alt="search icon"/>
            </div>
            
            <div className="ff-section">
                {/* From your contacts */}
                <div className="contacts">
                    <h2 className="section-title">From Your Contacts</h2>
                    <div className="people-list-ff">
                    <div className="person-card">
                        {/* Individual person 1 */}
                        <div className="person">
                            <div className="profile-image">
                                <img className='profile' src={Man1} alt="Profile Pic" />
                            </div>
                            <div className="person-info">
                                <h2>Juan Fernando Santos</h2>
                                {/* Add more information about the person here */}
                            </div>
                        </div>
                        <div className="person-card">
                        {/* Individual person 1 */}
                        <div className="person">
                            <div className="profile-image">
                                <img className='profile' src={Woman1} alt="Profile Pic" />
                            </div>
                            <div className="person-info">
                                <h2>Andrea Garay</h2>
                                {/* Add more information about the person here */}
                            </div>
                        </div>
                    </div>

                    <div className="person-card">
                        {/* Individual person 1 */}
                        <div className="person">
                            <div className="profile-image">
                                <img className='profile' src={Woman4} alt="Profile Pic" />
                            </div>
                            <div className="person-info">
                                <h2>Valeria Montes</h2>
                                {/* Add more information about the person here */}
                            </div>
                        </div>
                    </div>
                    </div>

                </div>

                {/* Recommended for you */}
                <div className="recommended">
                    <h2 className="section-title">Recommended for You</h2>
                    <div className="people-list">
                        {/* Space for three recommended people */}
                        <div className="person-card">
                        {/* Individual person 1 */}
                        <div className="person">
                            <div className="profile-image">
                                <img className='profile' src={Man3} alt="Profile Pic" />
                            </div>
                            <div className="person-info">
                                <h2>Fernando Caballero</h2>
                                {/* Add more information about the person here */}
                            </div>
                        </div>
                    </div> 
                    <div className="person-card">
                        {/* Individual person 1 */}
                        <div className="person">
                            <div className="profile-image">
                                <img className='profile' src={Man1} alt="Profile Pic" />
                            </div>
                            <div className="person-info">
                                <h2>Diego Narvaez</h2>
                                {/* Add more information about the person here */}
                            </div>
                        </div>
                    </div>
                    <div className="person-card">
                        {/* Individual person 1 */}
                        <div className="person">
                            <div className="profile-image">
                                <img className='profile' src={Woman2} alt="Profile Pic" />
                            </div>
                            <div className="person-info">
                                <h2>Yara Montana</h2>
                                {/* Add more information about the person here */}
                            </div>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <Navbar/>
        </div>
    );
}

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <Link to="/Home">
                    <div className='home-icon' >
                        <img className="link-icon" src={homeIcon} alt="home icon"/>
                    </div>
                </Link>
                <Link to="/books">
                    <div className='books-icon' >
                        <img className="link-icon" src={bookIcon} alt="book icon"/>
                    </div>
                </Link>
                <Link to="/friends" className='friend-link'>
                    <div className='friends-icon' >
                        <img className="link-icon" src={friendIconRed} alt="friend icon"/>
                    </div>
                    <p className='friends-subtitle'>Friends</p>
                </Link>
                <Link to="/map">
                    <div className='map-icon' >
                        <img className="link-icon" src={mapIcon} alt="map icon"/>
                    </div>
                </Link>
            </div>
        </div>
    );
  }
    
   



