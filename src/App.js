import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FirstPage from './pages/FirstPage'
import MapPage from './pages/Map';
import FriendsPage from './pages/Friends';
import BooksPage from './pages/Books';
import Login from './pages/Login';
import FindFriends from './pages/FindFriends';
import Message from './pages/FriendsChat';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Home" element={<HomePage/>} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/findFriends" element={<FindFriends/>} />
          <Route path="/chat" element={<Message/>} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;

