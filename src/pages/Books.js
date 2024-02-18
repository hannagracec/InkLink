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
import Book3 from './images/Book3.png'
import Book4 from './images/Book4.png'
import Book5 from './images/Book5.png'
import Book6 from './images/Book6.png'
import Book7 from './images/Book7.png'
import Book8 from './images/Book8.png'
import Book9 from './images/Book9.png'
import Book10 from './images/Book10.png'
import Book11 from './images/Book11.png'
import Book12 from './images/Book12.png'
import Book13 from './images/Book13.png'
import Book14 from './images/Book14.png'
import Book15 from './images/Book15.png'
import Book16 from './images/Book16.png'
import Book17 from './images/Book17.png'
import Book18 from './images/Book18.png'
import Book19 from './images/Book19.png'
import Book20 from './images/Book20.png'
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

        setCatalog([newBook, ...catalog]);
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
                            <img src={Book3} alt="Book 3" />
                            <img src={Book4} alt="Book 4" />
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">Recommended</div>
                    <div className="book-list-container">
                        <div className="book-list">
                            {/* Default book image for recommended books section */}
                            {/* <img src="https://via.placeholder.com/150" alt="Default Book" /> */}
                            <img src={Book5} alt="Book 5" />
                            <img src={Book6} alt="Book 6" />
                            <img src={Book7} alt="Book 7" />
                            <img src={Book8} alt="Book 8" />
                            <img src={Book9} alt="Book 9" />
                            <img src={Book10} alt="Book 10" />
                            <img src={Book11} alt="Book 11" />
                            <img src={Book12} alt="Book 12" />
                            <img src={Book13} alt="Book 13" />
                            <img src={Book14} alt="Book 14" />
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">Favourites</div>
                    <div className="book-list-container">
                        <div className="book-list">
                            {/* <img src="https://via.placeholder.com/150" alt="Default Book" /> */}
                            <img src={Book15} alt="Book 15" />
                            <img src={Book16} alt="Book 16" />
                            <img src={Book17} alt="Book 17" />
                            <img src={Book18} alt="Book 18" />
                            <img src={Book19} alt="Book 19" />
                            
                            
                        </div>
                    </div>
                </div>

                <div className="section">
                    <div className="section-header">Catalog</div>
                    <div className="book-list-container">
                        <div className="book-list">
                            <img src={Book20} alt="Book 20" />
                            <img src={Book15} alt="Book 15" />
                            <img src={Book16} alt="Book 16" />
                            <img src={Book17} alt="Book 17" />
                            <img src={Book18} alt="Book 18" />
                            <img src={Book19} alt="Book 19" />
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
    