import React from 'react';

import '@components/LeftPanel/LeftPanel.css';

function LeftPanel(props) {
  
  const timestamp = props.geoJson?.features?.map((feature) => {
    return feature.properties.timestamp;
  });

  const user = props.geoJson?.features?.map((feature) => {
    return feature.properties.user;
  });

  return (
    <div className="app">
      <form onSubmit={props.onInputChange}>
        <div className="content">
          <h1>Location</h1>
          <input
            className="input-field"
            required
            pattern="^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$"
            name="input-coordinates"
            placeholder="Please Enter the Coordinates..."
          />
          <p>
            The app takes your location as default.
            <br />
            Please enter comma seperated coordinates.
            <br />
            <i>Example: 12.9716,77.5946</i>
          </p>
          <h3>Dataset</h3>
          <p>Latitude: {props.latitude}N</p>
          <p>Longitude: {props.longitude}E</p>
          <p>Timestamp: {timestamp}</p>
          <p>User: {user}</p>
        </div>
      </form>
    </div>
  );
}

export default LeftPanel;
