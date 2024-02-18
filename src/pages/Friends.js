/*export default function Friends() {
    function Friends() {
        return (
            <div>
                <div className="header">
                    <h1>Connect</h1>
                    <button className="find-friend-btn">Find Friend</button>
                </div>
                <div className="people-list">
                    <div className="person">
                        <div className="profile-image"></div>
                        <div className="person-info">
                            <h2>Name</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}*/

import Man1 from "../pages/FriendsPP/Man1.png";
import Man2 from "../pages/FriendsPP/Man2.png";
import Man3 from "../pages/FriendsPP/Man3.png";
import Woman1 from "../pages/FriendsPP/Woman1.png";
import Woman2 from "../pages/FriendsPP/Woman2.png";
import Woman3 from "../pages/FriendsPP/Woman3.png";
import Woman4 from "../pages/FriendsPP/Woman4.png";
import React from 'react';
import './Friends.css';
import { Link } from 'react-router-dom';
import homeIcon from '../pages/images/House.svg';
import mapIcon from '../pages/images/map-black.svg';
import friendIconRed from '../pages/images/group-red.svg'
import bookIcon from '../pages/images/Book.svg'
export default Friends;

function Friends() {
    return (
        <div className="friends-page">
            {/* Header */}
            <div className="header-friends">
                <h1 className="title-friends">My Friends</h1>
                <Link to="/findFriends" className="find-friend-btn">Find Friends</Link>
            </div>

            {/* List of people */}
            <div className="people-list">
                <div className="person-card">
                    {/* Individual person 1 */}
                    <Link to="/chat" className="person">
                        <div className="profile-image">
                            <img className='profile' src={Woman1} alt="Profile Pic" />
                        </div>
                        <div className="person-info">
                            <h2>Tania Monge</h2>
                            {/* Add more information about the person here */}
                        </div>
                    </Link>
                </div>
                

                <div className="person-card">
                    {/* Individual person 2 */}
                    <div className="person">
                        <div className="profile-image">
                            <img className='profile' src={Man1} alt="Profile Pic" />
                        </div>
                        <div className="person-info">
                            <h2>Alejandro Soto</h2>
                            {/* Add more information about the person here */}
                        </div>
                    </div>
                </div>
                

                <div className="person-card">
                    {/* Individual person 3 */}
                    <div className="person">
                        <div className="profile-image">
                            <img className='profile' src={Woman2} alt="Profile Pic" />
                        </div>
                        <div className="person-info">
                            <h2>Sofia Tapias</h2>
                            {/* Add more information about the person here */}
                        </div>
                    </div>
                </div>
                

                <div className="person-card">
                    {/* Individual person 4 */}
                    <div className="person">
                        <div className="profile-image">
                            <img className='profile' src={Woman3} alt="Profile Pic" />
                        </div>
                        <div className="person-info">
                            <h2>Calleigh Ng</h2>
                            {/* Add more information about the person here */}
                        </div>
                    </div>
                </div>
                

                <div className="person-card">
                    {/* Individual person 5 */}
                    <div className="person">
                        <div className="profile-image">
                            <img className='profile' src={Man2} alt="Profile Pic" />
                        </div>
                        <div className="person-info">
                            <h2>Santiago Pineros</h2>
                            {/* Add more information about the person here */}
                        </div>
                    </div>
                </div>
                

                <div className="person-card">
                    {/* Individual person 6 */}
                    <div className="person">
                        <div className="profile-image">
                            <img className='profile' src={Woman4} alt="Profile Pic" />
                        </div>
                        <div className="person-info">
                            <h2>Kya Broderik</h2>
                            {/* Add more information about the person here */}
                        </div>
                    </div>
                </div>
                

                <div className="person-card">
                    {/* Individual person 7 */}
                    <div className="person">
                        <div className="profile-image">
                            <img className='profile' src={Woman3} alt="Profile Pic" />
                        </div>
                        <div className="person-info">
                            <h2>Hanna Cho</h2>
                            {/* Add more information about the person here */}
                        </div>
                    </div>
                </div>
                

                <div className="person-card">
                    {/* Individual person 8 */}
                    <div className="person">
                        <div className="profile-image">
                            <img className='profile' src={Woman1} alt="Profile Pic" />
                        </div>
                        <div className="person-info">
                            <h2>Ramisa Islam</h2>
                            {/* Add more information about the person here */}
                        </div>
                    </div>
                </div>
                

                <div className="person-card">
                    {/* Individual person 9 */}
                    <div className="person">
                        <div className="profile-image">
                            <img className='profile' src={Woman2} alt="Profile Pic" />
                        </div>
                        <div className="person-info">
                            <h2>Sarah Yip</h2>
                            {/* Add more information about the person here */}
                        </div>
                    </div>
                </div>
                

                <div className="person-card">
                    {/* Individual person 10 */}
                    <div className="person">
                        <div className="profile-image">
                            <img className='profile' src={Woman3} alt="Profile Pic" />
                        </div>
                        <div className="person-info">
                            <h2>Stephanie Oboh</h2>
                            {/* Add more information about the person here */}
                        </div>
                    </div>
                </div>
                

                <div className="person-card">
                    {/* Individual person 11 */}
                    <div className="person">
                        <div className="profile-image">
                            <img className='profile' src={Woman4} alt="Profile Pic" />
                        </div>
                        <div className="person-info">
                            <h2>Julia Strelioff</h2>
                            {/* Add more information about the person here */}
                        </div>
                    </div>
                </div>
                

                <div className="person-card-last">
                    {/* Individual person 12 */}
                    <div className="person">
                        <div className="profile-image">
                            <img className='profile' src={Man3} alt="Profile Pic" />
                        </div>
                        <div className="person-info">
                            <h2>Noah Tan</h2>
    {/* Add more information about the person here */}
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
    
   

