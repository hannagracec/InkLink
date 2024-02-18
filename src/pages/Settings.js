import Man1 from "../pages/FriendsPP/Man1.png";
import Man2 from "../pages/FriendsPP/Man2.png";
import Man3 from "../pages/FriendsPP/Man3.png";
import Woman1 from "../pages/FriendsPP/Woman1.png";
import Woman2 from "../pages/FriendsPP/Woman2.png";
import Woman3 from "../pages/FriendsPP/Woman3.png";
import Woman4 from "../pages/FriendsPP/Woman4.png";
import settingsicon from '../pages/SettingsImages/settingsicon.png';
import React, { useEffect, useState } from 'react';
import './Settings.css';

export default function Settings() {

    const [setSliderValue] = useState(0);

    useEffect(() => {
        const coll = document.getElementsByClassName("collapsible");
        const collArray = Array.from(coll);

        collArray.forEach(element => {
            element.addEventListener("click", function() {
                this.classList.toggle("active");
                const content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        });

        return () => {
            collArray.forEach(element => {
                element.removeEventListener("click");
            });
        };
    }, []);


    const handleSliderChange = (event) => {
        setSliderValue(parseInt(event.target.value));
    }

    const slider = document.getElementById('mySlider');
    const sliderValue = document.getElementById('sliderValue');

    slider.addEventListener('input', function() {
        const value = this.value;
        sliderValue.textContent = value;
        const percent = (value - this.min) / (this.max - this.min);
        const thumbWidth = getComputedStyle(this).getPropertyValue('--thumb-width');
        const thumbPosition = percent * (this.offsetWidth - parseFloat(thumbWidth));
        sliderValue.style.left = thumbPosition + 'px';
    });

    return (
        <div>
            <div className="topSetting">
                <table>
                    <tr>
                        <th><h1 className="headerSetting">Settings</h1></th>
                        <div style={{ position: 'absolute', top: 25, right: 30 }}>
                            <img src={settingsicon} alt="settings icon" width="40px" />
                        </div>
                    </tr>
                </table>
            </div>

            <div>
                <button type="button" className="collapsible">
                    Change Profile Picture
                </button>
                <div className="contentSetting">
                    <div className ="profile-options">
                        <button className="profile-icon-btn"><img src={Man1} alt ="pfp 1"></img></button>
                        <button className="profile-icon-btn"><img src={Man2} alt ="pfp 2"></img></button>
                        <button className="profile-icon-btn"><img src={Man3} alt ="pfp 3"></img></button>
                        <button className="profile-icon-btn"><img src={Woman1} alt ="pfp 4"></img></button>
                        <button className="profile-icon-btn"><img src={Woman2} alt ="pfp 5"></img></button>
                        <button className="profile-icon-btn"><img src={Woman3} alt ="pfp 6"></img></button>
                        <button className="profile-icon-btn"><img src={Woman4} alt ="pfp 6"></img></button>
                    </div>
                </div>

                <button type="button" className="collapsible">Change Username</button>
                <div className="contentSetting">
                    <form action="#">
                        <label htmlFor="Name">New Username: </label>
                        <input type="type" id="Name" name="Name" className="text-line" />
                    </form>
                </div>
                <button type="button" className="collapsible">
                    Change Walking Goal
                </button>
                <div className="contentSetting">
                    <p className="content_paragraph">Current Walking Goal: 30 km</p>
                    <div className="slider-container">
                        <input type="range" min="0" max="100" value='0' className="slider" id='mySlider' />
                            <span class ="sldier-value" id="sliderVlaye">0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
