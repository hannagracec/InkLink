import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Point from '../pages/images/Point.svg';
import L from 'leaflet';

function MapPage() {
    const customIcon = L.icon({
        iconUrl: Point,
        iconSize: [25, 41], // Adjust icon size as needed
        iconAnchor: [12, 41], // Adjust icon anchor point as needed
    });
    const userLocation = [51.045387680229595, -114.05500431847761];
    
    const [filteredLocations, setFilteredLocations] = useState([
        { id: 1, name: 'Location 1', coordinates: [51.505, -0.09] },
        { id: 2, name: 'Location 2', coordinates: [51.515, -0.1] },
        { id: 3, name: 'Location 3', coordinates: [51.495, -0.1] },
    ]);

    const handleFilter = (filterId) => {
        // Example: Filter locations based on the selected filter ID
        const filtered = filterId
            ? filteredLocations.filter((location) => location.id === filterId)
            : filteredLocations;

        setFilteredLocations(filtered);
    };

    return (
        <div >
            <h1>Map Page</h1>
            <div>
                <button onClick={() => handleFilter(null)}>Show All</button>
                <button onClick={() => handleFilter(1)}>Filter 1</button>
                <button onClick={() => handleFilter(2)}>Filter 2</button>
                {/* Add more buttons for different filters */}
            </div>
            <MapContainer center={userLocation} zoom={13} style={{ height: '400px' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={userLocation} icon={customIcon}>
                    <Popup>University of Calgary</Popup>
                </Marker>
                {filteredLocations.map((location) => (
                    <Marker key={location.id} position={location.coordinates}>
                        <Popup>{location.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default MapPage;
