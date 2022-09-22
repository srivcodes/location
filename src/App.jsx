import { useEffect, useState } from 'react';
import './App.css';
import { fetchData } from './service';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(typeof position.coords.latitude);
      // fetchData(34.96882, 33.66956, 35.21882, 33.91956);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      fetchData(latitude, longitude, latitude + 0.25, longitude + 0.25);
    });
  }, []);

  return (
    <div className="App">
      <h1>Location</h1>
      <input className="input-field" placeholder='Please Enter the Coordinates...'></input>
      <div className="card">
        {/* <button>count</button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Say what????</p>
    </div>
  );
}

export default App;
