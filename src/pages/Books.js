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
import homeIcon from '../pages/images/House.svg';
import mapIcon from '../pages/images/map-black.svg';
import { Link } from 'react-router-dom';
import friendIcon from '../pages/images/Group.svg'
import bookIconRed from '../pages/images/book-red.svg'


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
            <Navbar/>
        </div>
    )
}

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <Link to="/Home">
                    <div className='home-icon' >
                        <img className="link-icon" src={homeIcon} alt="home icon"/>
                    </div>
                </Link>
                <Link to="/books" className='book-link'>
                    <div className='books-icon' >
                        <img className="link-icon" src={bookIconRed} alt="book icon"/>
                    </div>
                    <p className='books-subtitle'>Books</p>
                </Link>
                <Link to="/friends">
                    <div className='friends-icon' >
                        <img className="link-icon" src={friendIcon} alt="friend icon"/>
                    </div>
                </Link>
                <Link to="/map">
                    <div className='map-icon' >
                        <img className="link-icon" src={mapIcon} alt="map icon"/>
                    </div>
                </Link>
            </div>
        </div>
    );
  }
    