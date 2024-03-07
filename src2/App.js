import React, { useState } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import axios from 'axios';

const MapWithPath = () => {
  const [startPlace, setStartPlace] = useState('');
  const [endPlace, setEndPlace] = useState('');
  const [startLat, setStartLat] = useState('');
  const [startLon, setStartLon] = useState('');
  const [endLat, setEndLat] = useState('');
  const [endLon, setEndLon] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Geocode start place
    const startResponse = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${startPlace}`);
    const startData = startResponse.data[0];
    setStartLat(startData.lat);
    setStartLon(startData.lon);

    // Geocode end place
    const endResponse = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${endPlace}`);
    const endData = endResponse.data[0];
    setEndLat(endData.lat);
    setEndLon(endData.lon);

    var map = L.map('map').setView([startData.lat, startData.lon], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);

    L.Routing.control({
      waypoints: [
        L.latLng(startData.lat, startData.lon),
        L.latLng(endData.lat, endData.lon)
      ],
      routeWhileDragging: true
    }).addTo(map);
  };

  return (
    <div>
      <h1>Map with Path</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="startPlace">Start Place:</label>
        <input type="text" id="startPlace" name="startPlace" value={startPlace} onChange={(e) => setStartPlace(e.target.value)} placeholder="Enter start place" /><br /><br />

        <label htmlFor="endPlace">End Place:</label>
        <input type="text" id="endPlace" name="endPlace" value={endPlace} onChange={(e) => setEndPlace(e.target.value)} placeholder="Enter end place" /><br /><br />

        <button type="submit">Submit</button>
      </form>
      <br />
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default MapWithPath;
