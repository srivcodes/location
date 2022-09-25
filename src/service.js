import osmtogeojson from 'osmtogeojson';
import axios from 'axios';

export async function fetchData(minLat, minLon, maxLat, maxLon) {
  let geoJson;
  const streetResponse = await axios.get(
    'https://www.openstreetmap.org/api/0.6/map?bbox=' +
      encodeURIComponent(`${minLat},${minLon},${maxLat},${maxLon}`)
  );

  geoJson = osmtogeojson(streetResponse.data);

  const weatherResponse = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${minLat}&lon=${minLon}&appid=${
      import.meta.env.VITE_WEATHER_KEY
    }&units=metric`
  );

  geoJson.weather = weatherResponse.data;

  return geoJson;
}
