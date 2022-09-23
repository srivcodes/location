import React, { useEffect, useState } from 'react';
import { GeoJSON, MapContainer, TileLayer } from 'react-leaflet';
import { fetchData } from '../src/service';
import './Map.css';


function Map() {
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

export default Map