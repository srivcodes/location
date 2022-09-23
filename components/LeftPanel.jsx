import React, { useState, useEffect } from 'react';
import { fetchData } from '../src/service';
import './LeftPanel.css';

function LeftPanel() {
  const [cordinates, setCordinates] = useState('');
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

  const timestamp = data?.features?.map((feature) => {
    return feature.properties.timestamp;
  });

  const user = data?.features?.map((feature) => {
    return feature.properties.user;
  });

  console.log(cordinates);

  return (
    <div className="app">
      <div className="content">
        <h1>Location</h1>
        <input
          className="input-field"
          onChange={(e) => setCordinates(e.target.value)}
          placeholder="Please Enter the Coordinates..."
        ></input>
        <p>
          <i>
            The app takes your location as default.
            <br />
            Please enter comma seperated cordinates
          </i>
          <br />
          Egsample: 12.9716,77.5946,13.2216,77.8446
        </p>
        <h3>Dataset</h3>
        <p>Latitude: {latitude}N</p>
        <p>Longitude: {longitude}E</p>
        <p>Timestamp: {timestamp}</p>
        <p>User: {user}</p>
      </div>
    </div>
  );
}

export default LeftPanel;
