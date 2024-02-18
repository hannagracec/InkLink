import settingsicon from '../pages/SettingsImages/settingsicon.png';
import React, { useEffect, useState } from 'react';
import './Settings.css';

export default function Settings() {

    const [sliderValue, setSliderValue] = useState(0);

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

    return (
        <div>
            <body>
                <table>
                    <tr>
                        <th><h1 className="header">Settings</h1></th>
                        <div style={{ position: 'absolute', top: 25, right: 30 }}>
                            <img src={settingsicon} alt="settings icon" width="40px" />
                        </div>
                    </tr>
                </table>
                <div>
                    <button type="button" className="collapsible">
                        Change Profile Picture
                    </button>
                    <div className="content">
                        <div className ="profile-options" border="none">
                            <button><img src="" alt ="pfp 1"></img></button>
                            <button><img src="" alt ="pfp 2"></img></button>
                            <button><img src="" alt ="pfp 3"></img></button>
                            <button><img src="" alt ="pfp 4"></img></button>
                            <button><img src="" alt ="pfp 5"></img></button>
                            <button><img src="" alt ="pfp 6"></img></button>
                        </div>
                    </div>

                    <button type="button" className="collapsible">Change Username</button>
                    <div className="content">
                        <form action="#">
                            <label htmlFor="Name">New Name: </label>
                            <input type="Name" id="Name" name="Name" />
                        </form>
                    </div>
                    <button type="button" className="collapsible">
                        Change Walking Goal
                    </button>
                    <div className="content">
                        <p className="content_paragraph">Current Walking Goal: 30 km</p>
                        <div className="slider-container">
                            <input type="range" min="0" max="100" value='0' onChange={handleSliderChange} className="slider" />
                            <div className="slider-labels">
                                <span>0</span>
                                <span>100</span>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
}
