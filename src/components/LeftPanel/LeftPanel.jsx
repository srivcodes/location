import React from 'react';
import '@components/LeftPanel/LeftPanel.css';

function LeftPanel(props) {
  const user = props.geoJson?.features?.map((feature) => {
    return feature.properties.user;
  });

  const temperature = props.geoJson?.weather?.main?.temp;
  const region = props.geoJson?.weather?.name;
  const weatherIcon = props.geoJson?.weather?.weather[0].icon;
  const weatherIconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;
  console.log(props.geoJson.weather);

  return (
    <div className="app">
      <form onSubmit={props.onInputChange}>
        <div className="content">
          <input
            className="input-field"
            required
            pattern="^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$"
            name="input-coordinates"
            placeholder="Please Enter the Coordinates..."
          />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1>{region}</h1>
            <img src={`${weatherIconUrl}`} height="60" width="60" />
          </div>
          <p>
            The app takes your location as default.
            <br />
            Please enter comma seperated coordinates.
            <br />
            <i>Example: 12.9716,77.5946</i>
          </p>
          <h3>Street Details</h3>
          <p>Latitude: {props.latitude}N</p>
          <p>Longitude: {props.longitude}E</p>
          <h3>Weather Details</h3>
          <p>Temperature: {temperature}°C</p>
        </div>
      </form>
    </div>
  );
}

export default LeftPanel;
