// function Books(){
//     return(
//         <div></div>
//     )
// }

// Books.js
import React, { useState } from 'react';
import './Books.css';
import HamburgerIcon from './images/hamburger-icon.png';
import AddIcon from './images/add-icon.png';
import Book1 from './images/Books1.png'
import Star from './images/star.jpg'
import Lemon from './images/lemon.jpg'
import Pink from './images/pink.jpg'
import Blue from './images/blue.jpg'
import Sea from './images/sea.jpg'
import La from './images/la.jpg'
import Italy from './images/italy.jpg'
import NewYork from './images/newyork.jpg'
import Greek from './images/greece.jpg'
import Coast from './images/coast.jpg'
import Beach from './images/beach.jpg'
import Les from './images/les.jpg'
import Coco from './images/coco.jpg'
import Shell from './images/shell.jpg'
import Bali from './images/bali.jpg'
import Leaf from './images/leaf.jpg'
import Hills from './images/hills.jpg'
import Mount from './images/mount.jpg'
import Shell2 from './images/shell2.jpg'
export default function Books() {
    const [catalog, setCatalog] = useState([]);

    // Function for adding book to catalog
    function addBookToCatalog() {
        // add a placeholder image URL
        const newBook = {
            id: catalog.length + 1,
            imageUrl: "https://via.placeholder.com/150", // Placeholder image URL
        };

        setCatalog([...catalog, newBook]);
    }

    return (
        <div className="container">
            <header className="header-books">
                <div className="title">Books</div>
                <div className="header-buttons">
                    {/* Use the imported image for the add button */}
                    <img className="add-btn" src={AddIcon} alt="Add Button" onClick={addBookToCatalog} />
                    {/* Use the imported image for the hamburger icon */}
                    <img className="hamburger-btn" src={HamburgerIcon} alt="Hamburger Icon" />
                </div>
            </header>
            <div className="content-books">
                {/* Add more space between sections */}
                <div style={{ marginBottom: '20px' }}></div>

                <div className="section">
                    <div className="section-header">Currently Reading</div>
                    <div className="book-list-container">
                        <div className="book-list">
                            {/* Default book image for currently reading section */}
                            <img src={Star} alt="Harry"/>
                            <img src={Pink} alt="Default Book" />
                            <img src={Blue} alt="Default Book" />
                            <img src={Lemon} alt="Default Book" />
                            
                            <img src={Sea} alt="Default Book" />
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">Recommended Books</div>
                    <div className="book-list-container">
                        <div className="book-list">
                            {/* Default book image for recommended books section */}
                            <img src={La} alt="Default Book" />
                            <img src={Italy} alt="Default Book" />
                            <img src={NewYork} alt="Default Book" />
                            <img src={Greek} alt="Default Book" />
                            <img src={Coast} alt="Default Book" />
                            <img src={Beach} alt="Default Book" />
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">Favorite Books</div>
                    <div className="book-list-container">
                        <div className="book-list">
                            {/* <img src="https://via.placeholder.com/150" alt="Default Book" /> */}
                            <img src={Les} alt="Book1" />
                            <img src={Coco} alt="Book1" />
                            <img src={Shell} alt="Book1" />
                            <img src={Bali} alt="Book1" />
                            <img src={Leaf} alt="Book1" />
                            
                            
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">Book Catalog</div>
                    <div className="book-list-container">
                        <div className="book-list">
                            <img src={Hills} alt="Default Book" />
                            <img src={Mount} alt="Default Book" />
                            <img src={Shell2} alt="Default Book" />
                            <img src={Lemon} alt="Default Book" />
                            <img src={Pink} alt="Default Book" />
                            {catalog.map((book) => (
                                <div key={book.id} className="book">
                                    <img src="https://via.placeholder.com/150" alt="Default Book" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

