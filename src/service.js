import osmtogeojson from 'osmtogeojson';
import axios from 'axios';

export async function fetchData(a, b, c, d) {
  let response = await axios.get(
    'https://www.openstreetmap.org/api/0.6/map?bbox=' +
      encodeURIComponent(`${a},${b},${c},${d}`)
  );
  let geoJson = osmtogeojson(response.data);
  return geoJson;
}
