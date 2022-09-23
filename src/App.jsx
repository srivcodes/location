import React from 'react';
import 'leaflet/dist/leaflet.css';

import Map from '@components/Map/Map';
import LeftPanel from '@components/LeftPanel/LeftPanel';


function App() {
  return (
    <div className="App">
      <LeftPanel />
      <Map />
    </div>
  );
}

export default App;
