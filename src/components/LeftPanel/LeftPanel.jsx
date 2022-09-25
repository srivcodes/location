import React from 'react';
import '@components/LeftPanel/LeftPanel.css';

function LeftPanel(props) {
  const temperature = props.geoJson?.weather?.main?.temp;
  const region = props.geoJson?.weather?.name;
  const weatherIcon = props.geoJson?.weather?.weather[0].icon;
  const weatherIconUrl = `https://openweathermap.org/img/w/${weatherIcon}.png`;
  const humidity = props.geoJson?.weather?.main?.humidity;
  const pressure = props.geoJson?.weather?.main?.pressure;
  const feelsLike = props.geoJson?.weather?.main?.feels_like;

  console.log(props.geoJson?.weather);

  return (
    <div className="panel-container">
      <div className="region-information">
        <div className="title">
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
        <div className="details">
        <div className="street-details">
          <h3>Street Details</h3>
          <p>Latitude: {props.latitude}N</p>
          <p>Longitude: {props.longitude}E</p>
        </div>
        <div clasName="weather-details">
          <h3>Weather Details</h3>
          <p>Temperature: {temperature}°C</p>
          <p>Humidity: {humidity}</p>
          <p>Pressure: {pressure}</p>
          <p>Feels Like: {feelsLike}°C</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
