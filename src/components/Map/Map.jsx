import React from 'react';
import { GeoJSON, Marker, TileLayer } from 'react-leaflet';
import { useLeafletContext } from '@react-leaflet/core';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// workaround for leaflet icon since react-leaflet removes it on production from the path

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

import '@components/Map/Map.css';

function Map(props) {
  const context = useLeafletContext();
  const { lat, lng } = context.map.getCenter();
  const geoJson = context.map.options.geoJson;

  return (
    lat > 0 &&
    lng > 0 && (
      <div className="card">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} />
        <GeoJSON key={JSON.stringify(geoJson)} data={geoJson} />
      </div>
    )
  );
}

export default Map;
