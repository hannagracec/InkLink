import Man1 from "../pages/FriendsPP/Man1.png";
import Man2 from "../pages/FriendsPP/Man2.png";
import Man3 from "../pages/FriendsPP/Man3.png";
import Woman1 from "../pages/FriendsPP/Woman1.png";
import Woman2 from "../pages/FriendsPP/Woman2.png";
import Woman3 from "../pages/FriendsPP/Woman3.png";
import Woman4 from "../pages/FriendsPP/Woman4.png";
import SearchIcon from "../pages/FriendsPP/SearchIcon.png"
import React from 'react';
import './FindFriends.css';
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
            </div>
            

            {/* From your contacts */}
            <div className="section">
                <h2 className="section-title">From Your Contacts</h2>
                <div className="people-list">
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
            <div className="section">
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
    );
}


