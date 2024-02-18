import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import coffeeIcon from '../pages/images/coffeepoint.svg';
import benchIcon from '../pages/images/benchpoint.svg';
import parkIcon from '../pages/images/park.svg';
import L from 'leaflet';
import marker from '../pages/images/Point.svg';
import './Map.css';
import homeIcon from '../pages/images/House.svg';
import mapIconRed from '../pages/images/Map.svg';
import { Link } from 'react-router-dom';
import friendIcon from '../pages/images/Group.svg'
import bookIcon from '../pages/images/Book.svg'

function MapPage() {
    const centralLibraryLocation = [51.04546994292526, -114.05504115199753];
    
    const [filteredLocations, setFilteredLocations] = useState([]);

    const allLocations = [
        { id: 1, name: 'Phil & Sebastion Coffee', coordinates: [51.047864316363956, -114.04993585014859], type: 'coffee' },
        { id: 2, name: 'Good Earth', coordinates: [51.04535364654988, -114.05648111859608], type: 'coffee' },
        { id: 3, name: 'Platform Cafe', coordinates: [51.04425606564293, -114.05566865006111], type: 'coffee' },
        { id: 4, name: 'Harmony Park', coordinates: [51.04876499774252, -114.06360042334693], type: 'park' },
        { id: 5, name: 'Flyover Park', coordinates: [51.05059954060166, -114.04862296839754], type: 'park' },
        { id: 6, name: 'Enmax Park', coordinates: [51.03802719071816, -114.0477671318806], type: 'park' },
        { id: 7, name: 'Bench 1', coordinates: [51.0445509006144, -114.04452920062622], type: 'bench' },
        { id: 8, name: 'Bench 2', coordinates: [51.03676887335512, -114.04742568723623], type: 'bench' },
        { id: 9, name: 'Bench 3', coordinates: [51.036931998567084, -114.0469470166468], type: 'bench' },
    ];

    const handleFilter = (filterType) => {
        // Filter locations based on the selected filter type
        const filtered = filterType
            ? allLocations.filter((location) => location.type === filterType)
            : allLocations;

        setFilteredLocations(filtered);
    };

    return (
        <div className='map-header'>
            <h1 className='map-title'>My Map</h1>
            <div className='filter-section'>
                <button className="filter-btn" onClick={() => handleFilter('coffee')}>Cafe's</button>
                <button className="filter-btn" onClick={() => handleFilter('bench')}>Benches</button>
                <button className="filter-btn" onClick={() => handleFilter('park')}>Parks</button>
                <button className="filter-btn" onClick={() => handleFilter(null)}>Show All</button>
            </div>
            <MapContainer center={centralLibraryLocation} zoom={13} style={{ height: '600px' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Central Library Marker */}
                <Marker position={centralLibraryLocation} icon={L.icon({
                    iconUrl: marker,
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                })}>
                    <Popup>Your Location</Popup>
                </Marker>
                {/* Filtered Locations Markers */}
                {filteredLocations.map((location) => (
                    <Marker key={location.id} position={location.coordinates} icon={getMarkerIcon(location.type)}>
                        <Popup>{location.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
            <Navbar />
        </div>
    );
}

function getMarkerIcon(type) {
    switch (type) {
        case 'coffee':
            return L.icon({
                iconUrl: coffeeIcon,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            });
        case 'bench':
            return L.icon({
                iconUrl: benchIcon,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            });
        case 'park':
            return L.icon({
                iconUrl: parkIcon,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            });
        default:
            return null;
    }
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
                <Link to="/books">
                    <div className='books-icon' >
                        <img className="link-icon" src={bookIcon} alt="book icon"/>
                    </div>
                </Link>
                <Link to="/friends">
                    <div className='friends-icon' >
                        <img className="link-icon" src={friendIcon} alt="friend icon"/>
                    </div>
                </Link>
                <Link to="/map" className='map-link'>
                    <div className='map-icon' >
                        <img className="link-icon" src={mapIconRed} alt="map icon"/>
                    </div>
                    <p className='map-subtitle'>Map</p>
                </Link>
            </div>
        </div>
    );
}

export default MapPage;

