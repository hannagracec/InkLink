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
            <header className="header">
                <div className="title">Books</div>
                <div className="header-buttons">
                    {/* Use the imported image for the add button */}
                    <img className="add-btn" src={AddIcon} alt="Add Button" onClick={addBookToCatalog} />
                    {/* Use the imported image for the hamburger icon */}
                    <img className="hamburger-btn" src={HamburgerIcon} alt="Hamburger Icon" />
                </div>
            </header>
            <div className="content">
                {/* Add more space between sections */}
                <div style={{ marginBottom: '20px' }}></div>

                <div className="section">
                    <div className="section-header">Currently Reading</div>
                    <div className="book-list-container">
                        <div className="book-list">
                            {/* Default book image for currently reading section */}
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">Recommended Books</div>
                    <div className="book-list-container">
                        <div className="book-list">
                            {/* Default book image for recommended books section */}
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">Favorite Books</div>
                    <div className="book-list-container">
                        <div className="book-list">
                            {/* <img src="https://via.placeholder.com/150" alt="Default Book" /> */}
                            <img src={Book1} alt="Book1" />
                            <img src={Book1} alt="Book1" />
                            <img src={Book1} alt="Book1" />
                            <img src={Book1} alt="Book1" />
                            <img src={Book1} alt="Book1" />
                            
                            
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">Book Catalog</div>
                    <div className="book-list-container">
                        <div className="book-list">
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
                            <img src="https://via.placeholder.com/150" alt="Default Book" />
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
