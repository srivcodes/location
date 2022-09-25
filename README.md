# street-finder

### Features 
- This application makes use of [openstreetmap API](https://www.openstreetmap.org/api/0.6/map) and [openweathermap API](https://openweathermap.org/current).

- The application renders details of the location on the basis of location coordinates (latitude and longitude)

- By default the application asks for permission from the user for fetching the location in the browser.

- In case of permission not being granted, application has a fallback set of coordinates.

### Local Setup
- Install node modules.

    `yarn`

- Update the .env file.
    - remove .example from the last.
    - replace 'env_key' with the openweathermap API key.

- Run the local server.

    `yarn dev`

- Navigate to link [http://127.0.0.1:5173/](http://127.0.0.1:5173/)

### Core Dependencies

- `osmtogeojson`,`leaflet`,`@react-leaflet/core`

### Hosted Link
[street-finder](https://street-finder.netlify.app/) 