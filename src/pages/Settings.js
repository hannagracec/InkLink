import React, {useEffect} from 'react';
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
        return () => {
            collArray.forEach(element => {
                element.removeEventListener("click");
            });
        };
    }, []);

    const settings = {
        setting1: 'default1',
        setting2: 'default2',
        setting3: 'default3'
    };

    const handleSettingChange = (event) => {
        const { name, value } = event.target;
        settings[name] = value;
    };

    const handleSaveSettings = () => {
        // Do something with the updated settings
        console.log('Settings saved:', settings);
    };

    return (
        <div>
            <body>
            <h1 className="header">Settings</h1>
            <div>
                <button type="button" class ="collapsible"><img src="default_profile_pic.jpg"></img>Change Profile Picture</button>
                <div className ="content">
                    <p>would need access to users photos or have default photos they can choose from</p>
                </div>

                <button type="button" class ="collapsible">Change Username</button>
                <div className="content">
                    <form action="#">
                        <label for="Name">New Name: </label>
                        <input type="Name" id ="Name" name="Name"></input>
                    </form>
                </div>
                <button type="button" class ="collapsible"><img src="default_profile_pic.jpg"></img>Change Walking Goal</button>
                <div className ="content">
                    <p>Current goal: 10 km</p>
                </div>
            </div>
            </body>
        </div>
    )

}


// {/* import React from 'react';
// function Settings() {
//     return (
//         <div>
//             <!DOCTYPE html>
//             <html>
//             <head>
//             <title>Settings page of app</title>
//             </head>
//             <style>
//                 .collapsible {
//                 background-color: #777;
//                 color: white;
//                 cursor: pointer;
//                 padding: 18px;
//                 width: 100%;
//                 border: none;
//                 text-align: left;
//                 outline: none;
//                 font-size: 15px;
//                 }

//                 .active, .collapsible:hover {
//                 background-color: #555;
//                 }

//                 .content {
//                 padding: 0 18px;
//                 display: none;
//                 overflow: hidden;
//                 background-color: #f1f1f1;
//                 }
//             </style>
//             <body>
//             <h1>Settings</h1>
//             <div>
//                 <button type="button" class ="collapsible">Edit Profile Picture</button>
//                 <div class ="content"><p>owuld need access to users photos or have default photos they can choose from</p>
//                 </div>

//                 <button type="button" class ="collapsible">Edit Profile Name</button>
//                 <div class="content">
//                     <form action="#">
//                         <label for="Name">New Name: </label><br>
//                         <input type="Name" id ="Name" name="Name"><br></br></input>
//                     </form>

//                 </div>
//             </div>
//             </body>
//             </html>
//         </div>
//     )

// } */}

// {/* 
// import React from 'react';

// export default function Settings() {
//     const settings = {
//         setting1: 'default1',
//         setting2: 'default2',
//         setting3: 'default3'
//     };

//     const handleSettingChange = (event) => {
//         const { name, value } = event.target;
//         settings[name] = value;
//     };

//     const handleSaveSettings = () => {
//         // Do something with the updated settings
//         console.log('Settings saved:', settings);
//     };

//     return (
//         <div>
//             <h2>Settings</h2>
//             <label>
//                 Setting 1:
//                 <input
//                     type="text"
//                     name="setting1"
//                     defaultValue={settings.setting1}
//                     onChange={handleSettingChange}
//                 />
//             </label>
//             <br />
//             <label>
//                 Setting 2:
//                 <input
//                     type="text"
//                     name="setting2"
//                     defaultValue={settings.setting2}
//                     onChange={handleSettingChange}
//                 />
//             </label>
//             <br />
//             <label>
//                 Setting 3:
//                 <input
//                     type="text"
//                     name="setting3"
//                     defaultValue={settings.setting3}
//                     onChange={handleSettingChange}
//                 />
//             </label>
//             <br />
//             <button onClick={handleSaveSettings}>Save</button>
//         </div>
//     );
// }

//  */}
