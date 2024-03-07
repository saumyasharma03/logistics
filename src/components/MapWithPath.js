import React, { useState } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';


export const MapWithPath = () => {
    const [startLat, setStartLat] = useState('');
    const [startLon, setStartLon] = useState('');
    const [endLat, setEndLat] = useState('');
    const [endLon, setEndLon] = useState('');

    const axios = require('axios');

    // const address = '1600 Amphitheatre Parkway, Mountain View, CA';

    // axios.get('https://nominatim.openstreetmap.org/search', {
    //     params: {
    //         q: address,
    //         format: 'json',
    //     },
    // })
    // .then(response => {
    //     console.log(response.data);
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });  
    
    const handleSubmit = (event) => {
        event.preventDefault();

        var map = L.map('map').setView([startLat, startLon], 5);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        }).addTo(map);

        L.Routing.control({
        waypoints: [
            L.latLng(startLat, startLon),
            L.latLng(endLat, endLon)
        ],
        routeWhileDragging: true
        }).addTo(map);
    };

    return (
        <div className="map-container">
        <h1>Map with Path</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="startLat">Start Latitude</label>
          <input type="text" id="startLat" name="startLat" value={startLat} onChange={(e) => setStartLat(e.target.value)} placeholder="Enter start latitude" /><br /><br />
      
          <label htmlFor="startLon">Start Longitude</label>
          <input type="text" id="startLon" name="startLon" value={startLon} onChange={(e) => setStartLon(e.target.value)} placeholder="Enter start longitude" /><br /><br />
      
          <label htmlFor="endLat">End Latitude</label>
          <input type="text" id="endLat" name="endLat" value={endLat} onChange={(e) => setEndLat(e.target.value)} placeholder="Enter end latitude" /><br /><br />
      
          <label htmlFor="endLon">End Longitude:</label>
          <input type="text" id="endLon" name="endLon" value={endLon} onChange={(e) => setEndLon(e.target.value)} placeholder="Enter end longitude" /><br /><br />
      
          <button type="submit">Submit</button>
        </form>
        <br />
        <div id="map"></div>
      </div>
      
    );
};
