import React from 'react';

import '@components/Header/Header.css';

function Header(props) {
  return (
    <form onSubmit={props.onInputChange}>
      <div className="header">
        <h1>
          <strong>Location</strong>
        </h1>
        <input
          className="input-field"
          required
          pattern="^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$"
          name="input-coordinates"
          placeholder="Please Enter the Coordinates..."
        />
      </div>
    </form>
  );
}

export default Header;
