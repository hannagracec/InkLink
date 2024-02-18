import Woman2 from "../pages/FriendsPP/Woman2.png";
import React from 'react';
import './FriendsChat.css';
export default FriendsChat;


function FriendsChat() {
    return (
        <div className="chat-container">
            <div className="message outgoing-sender1">
                <span className="message-content">Hello!</span>
            </div>
            <div className="message incoming">
                <span className="message-content">Hi there!</span>
            </div>
            <div className="message outgoing-sender1">
                <span className="message-content">How are you?</span>
            </div>
            <div className="message incoming">
                <span className="message-content">I'm good, thanks!</span>
            </div>
            {/* Add more messages as needed */}
        </div>
    );
}

