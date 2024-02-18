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
    });


    document.addEventListener('DOMContentLoaded', function() {
        const button = document.getElementById('toggleButton');
      
        button.addEventListener('click', function() {
          this.classList.toggle('checked');
        });
      });
      



    // const profileIconBtns = document.querySelectorAll('.profile-icon-btn');

    // // Add click event listener to each profile icon button
    // profileIconBtns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         // Toggle the 'active' class on the clicked button
    //         this.classList.toggle('active');

    //         // Save the active state to local storage
    //         const isActive = this.classList.contains('active');
    //         const key = `profileBtnActive_${this.id}`;
    //         localStorage.setItem(key, isActive);
    //     });

    //     // Check if the button was previously clicked and apply the 'active' class
    //     const key = `profileBtnActive_${btn.id}`;
    //     const isActive = localStorage.getItem(key) === 'true';
    //     if (isActive) {
    //         btn.classList.add('active');
    //     }
    // });
    //     // function showSliderValue() {
        //     rangeBullet.innerHTML = rangeSlider.value;
        //     var bulletPosition = (rangeSlider.value / rangeSlider.max);
        //     rangeBullet.style.left = (bulletPosition * rangeSlider.offsetWidth) + "px";

        function showSliderValue() {
            const rangeSlider = document.getElementById("rs-range-line");
            const rangeBullet = document.getElementById("rs-bullet");
    
            if (rangeSlider && rangeBullet) {
                rangeBullet.innerHTML = rangeSlider.value;
                const bulletPosition = rangeSlider.value / rangeSlider.max;
                rangeBullet.style.left = `${bulletPosition * rangeSlider.offsetWidth}px`;
            }
        }


    //     const rangeSlider = document.getElementById("rs-range-line");
    //     const rangeBullet = document.getElementById("rs-bullet");

    //     if (rangeSlider && rangeBullet) {
    //         rangeSlider.addEventListener("input", showSliderValue, false);
    //     }

    //     return () => {
    //         if (rangeSlider && rangeBullet) {
    //             rangeSlider.removeEventListener("input", showSliderValue);
    //         }
    //     };
    // }, []);




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
                    <div className="container">
  
                        <div className="range-slider">
                            <span id="rs-bullet" className="rs-label">0</span>
                            <input id="rs-range-line" className="rs-range" type="range" value="0" min="0" max="200"/>
                        </div>
                        
                        <div className="box-minmax">
                            <span>0</span><span>200</span>
                        </div>
                        
                    
                    </div>
                </div>
            </div>
        </div>
    );
    }
