import Man1 from "../pages/FriendsPP/Man1.png";
import Man2 from "../pages/FriendsPP/Man2.png";
import Man3 from "../pages/FriendsPP/Man3.png";
import Woman1 from "../pages/FriendsPP/Woman1.png";
import Woman2 from "../pages/FriendsPP/Woman2.png";
import Woman3 from "../pages/FriendsPP/Woman3.png";
import settingsicon from '../pages/SettingsImages/settingsicon.png';
import React, { useEffect } from 'react';
import './Settings.css';

export default function Settings() {
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

        const rangeSlider = document.getElementById("rs-range-line");
        const rangeBullet = document.getElementById("rs-bullet");
        
        rangeSlider.addEventListener("input", showSliderValue, false);
        
        function showSliderValue() {
            rangeBullet.innerHTML = rangeSlider.value;
            const bulletPosition = (rangeSlider.value / rangeSlider.max);
            rangeBullet.style.left = (bulletPosition * rangeSlider.offsetWidth) + "px";
        }
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

    document.addEventListener('DOMContentLoaded', function() {
        const button = document.getElementById('toggleButton');
      
        button.addEventListener('click', function() {
          this.classList.toggle('checked');
        });
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
                    General
                </button>
                <div className="contentSetting">
                    

                </div>


                <button type="button" className="collapsible">
                    Change Profile Picture
                </button>
                <div className="contentSetting">
                    <div className ="profile-options">
                        <div className="profile-icon-btn"><img src={Man1} alt ="pfp 1" class ="image"></img></div>
                        <div className="profile-icon-btn"><img src={Man2} alt ="pfp 2" class ="image"></img></div>
                        <div className="profile-icon-btn"><img src={Man3} alt ="pfp 3" class ="image"></img></div>
                        <div className="profile-icon-btn"><img src={Woman1} alt ="pfp 4" class ="image"></img></div>
                        <div className="profile-icon-btn"><img src={Woman2} alt ="pfp 5" class ="image"></img></div>
                        <div className="profile-icon-btn"><img src={Woman3} alt ="pfp 6"class ="image" ></img></div>
                    </div>
                </div>

                <button type="button" className="collapsible">Change Username</button>
                <div className="contentSetting">
                    <form action="#">
                        <div className="name-label-input">
                            <label htmlFor="Name" className ="choose-username-label">Choose a new username: </label>
                            <input type="type" id="Name" name="Name" className="text-line" />
                        </div>
                        <div className="submit">
                            <button id="toggleButton">Verify</button>

                        </div>
                    </form>
                </div>
                <button type="button" className="collapsible">
                    Change Walking Goal
                </button>

                <div className="contentSetting">

                        <div className="range-slider">
                            <span id="rs-bullet" className="rs-label">0</span>
                            <input id="rs-range-line" className="rs-range" type="range" value="0" min="0" max="200"/>
                        </div>
                        
                        <div className="box-minmax">
                            <span>0</span><span>200</span>
                        </div>
                 </div>

                <button type="button" className="collapsible">
                    Update Libraries Visited
                </button>
                <div className="contentSetting">
                    <label className="library-container">W.R. Castell Central Library
                        <input type="checkbox" checked="checked"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Alexander Calhoun Library
                        <input type="checkbox"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Bowness Library
                        <input type="checkbox"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Fish Creek Library
                        <input type="checkbox" checked="checked"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Glenmore Square Library
                        <input type="checkbox" checked="checked"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Louise Riley Library
                        <input type="checkbox"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Memorial Park Library
                        <input type="checkbox"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Nose Hill Library
                        <input type="checkbox"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Shawnessy Library
                        <input type="checkbox" checked="checked"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Signal Hill Library
                        <input type="checkbox" checked="checked"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">CrowfootLibrary
                        <input type="checkbox" checked="checked"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Village Square Library
                        <input type="checkbox"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Southwood Library
                        <input type="checkbox" checked="checked"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Saddletowne Library
                        <input type="checkbox"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Country Hills Library
                        <input type="checkbox" checked="checked"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Judith Umbach Library
                        <input type="checkbox"/>
                        <span className="library-checkmark"></span>
                    </label>
                    <label className="library-container">Westhills Library
                        <input type="checkbox"/>
                        <span className="library-checkmark"></span>
                    </label>
                </div>

                <button type="button" className="collapsible">
                    Change City
                </button>
                <div className="contentSetting">
                    <div className='selection'>
                    <label for="cities">Choose your city  </label>
                    <select id="cities" name ="cities">
                        <option value="Airdrie">Airdrie</option>
                        <option value="Brooks">Brooks</option>
                        <option value="Calgary">Calgary</option>
                        <option value="Camrose">Camrose</option>
                        <option value="Cold Lake">Cold Lake</option>
                        <option value="Edmonton">Edmonton</option>
                        <option value="Fort Saskatchewan">Fort Saskatchewan</option>
                        <option value="Grande Prairie">Grande Prairie</option>
                        <option value="Leduc">Leduc</option>
                        <option value="Lethbridge">Lethbridge</option>
                        <option value="Lloydminster">Lloydminster</option>
                        <option value="Medicine Hat">Medicine Hat</option>
                        <option value="Red Deer">Red Deer</option>
                        <option value="Spruce Grove">Spruce Grove</option>
                        <option value="St. Albert">St. Albert</option>
                        <option value="Wetaskiwin">Wetaskiwin</option>
           

                    </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
