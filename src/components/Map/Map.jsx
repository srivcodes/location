import React from 'react';
import { GeoJSON, Marker, TileLayer } from 'react-leaflet';
import { useLeafletContext } from '@react-leaflet/core';

import '@components/Map/Map.css';

function Map(props) {
  const context = useLeafletContext();
  const { lat, lng } = context.map.getCenter();

  return (
    lat > 0 &&
    lng > 0 && (
      <div className="card">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} />
        <GeoJSON key={JSON.stringify(props.geoJson)} data={props.geoJson} />
      </div>
    )
  );
}

export default Map;
