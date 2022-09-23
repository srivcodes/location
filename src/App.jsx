import React from 'react';
import Map from '../components/Map';
import LeftPanel from '../components/LeftPanel';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <Map />
    </div>
  );
}

export default App;
