import React, { useRef, useEffect, useState } from 'react';
import { GeoJSON, MapContainer, TileLayer } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';

import { fetchData } from './service';


function App() {
  const [data, setData] = useState([]);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      const fetchedData = await fetchData(
        latitude,
        longitude,
        latitude + 0.25,
        longitude + 0.25
      );
      setData(fetchedData);
    });
  }, [latitude, longitude]);

  return (
    <div className="App">
      <div className='Content'>
      <h1>Location</h1>
      <input
        className="input-field"
        placeholder="Please Enter the Coordinates..."
      ></input>
      <div>
       <h3>Dataset</h3>
          <p>Latitude: {latitude}N</p>
          <p>Longitude: {longitude}E</p>
          <p>Timestamp: </p>
      </div>
      </div>
      {latitude > 0 && longitude > 0 && (
        <div className="card">
          <MapContainer
            zoom={20}
            scrollWheelZoom={false}
            center={{ lat: latitude, lng: longitude }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <GeoJSON key={JSON.stringify(data)} data={data} />
          </MapContainer>
        </div>
      )}
    </div>
  );
}

export default App;
