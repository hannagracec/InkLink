import Woman1 from "../pages/FriendsPP/Woman1.png";
import keyboard from "../pages/FriendsPP/keyboard.png";
import React from 'react';
import './FriendsChat.css';
export default FriendsChat;


function FriendsChat() {
    
    return (
        <div className="chat-container">
           <div className="person-card">
    {/* Individual person 1 */}
    <div className="person-chat">
        <div className="profile-image">
            <img className='profile' src={Woman1} alt="Profile Pic"></img>
        </div>
        <div className="person-info">
            <h2>Tania Monge</h2>
            {/* Add more information about the person here */}
        </div>
    </div>
</div>
            {/* Message from Person A */}
            <div className="message outgoing-sender1">
                <span className="message-content">Hey there! I just started reading an incredible book called "Normal People".</span>
            </div>
            
            {/* Message from Person B */}
            <div className="message incoming">
                <span className="message-content"> It's been on my to-read list for a while. </span>
            </div>
            
            {/* Message from Person A */}
            <div className="message outgoing-sender1">
                <span className="message-content">It's really engaging! We should  discuss it  over the weekend.</span>
            </div>
            
            {/* Message from Person B */}
            <div className="message incoming">
                <span className="message-content">Absolutely! Let's plan a picnic at that park downtown. I heard it's beautiful.</span>
            </div>
            
            {/* Message from Person A with location */}
            <div className="message outgoing-sender1">
                <span className="message-content">Sounds perfect! How about we meet at Prince's Island Park around 6? Here's the location: <a href="https://www.google.com/maps/d/u/0/viewer?mid=10sVnVpozIqQd-TfJrKne6DD0T8c&hl=en&ll=51.05601700000001%2C-114.06975699999998&z=17">Parks Downtown</a></span>
            </div>
            
            
            <div className = "key_board">
                <img className = "teclado" src ={keyboard} alt ="keyboard"></img>
            </div>
        </div>
    );
}

