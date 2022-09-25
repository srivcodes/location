import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Map from '@components/Map/Map';
import LeftPanel from '@components/LeftPanel/LeftPanel';
import Header from '@components/Header/Header';

import { fetchData } from '@src/service';

function App() {
  const [geoJson, setGeoJson] = useState(false);
  const [initialLatitude, setInitialLatitude] = useState(0);
  const [initialLongitude, setInitialLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          if (error) {
            // these are fallback coordinates incase of the location being blocked
            setLatitude(12.9716);
            setLongitude(77.5946);
          }
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (initialLatitude !== latitude || initialLongitude !== longitude) {
      fetchData(latitude, longitude, latitude + 0.25, longitude + 0.25).then(
        (data) => setGeoJson(data)
      );
    }
  }, [latitude, longitude]);

  const onInputChange = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const co = data.get('input-coordinates').split(',');
    setLatitude(co[0]);
    setLongitude(co[1]);
  };

  const DisplayMap = () =>
    useMemo(
      () => (
        <MapContainer
          zoom={20}
          scrollWheelZoom={false}
          center={{ lat: latitude, lng: longitude }}
          geoJson={geoJson}
        >
          <Map />
        </MapContainer>
      ),
      []
    );

  return (
    <div className="container">
      <Header onInputChange={onInputChange} />
      {geoJson ? (
        <div className="content-body">
          <LeftPanel
            geoJson={geoJson}
            latitude={latitude}
            longitude={longitude}
          />
          <DisplayMap />
        </div>
      ) : (
        <h3>Fetching details...</h3>
      )}
    </div>
  );
}
export default App;
