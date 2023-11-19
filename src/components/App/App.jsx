import './App.css';
import '../../globalVariables.css';
import LocationInput from '../LocationInput/LocationInput';
import { useState } from 'react';
import { Divider } from '@mui/material';

function App() {
  const [coordinates, setCoordinates] = useState({ lat: '', lon: '' });

  const handleCoordinatesChange = (coords) => {
    setCoordinates(coords);
  };
  return (
    <div className="App">
      <div>
        <h1>Creature sightings in your area</h1>
        <h2>Enter your zipcode to see creatures that have been seen near you</h2>
      </div>
      <LocationInput onChange={handleCoordinatesChange} />
      <div className="grid-container">
        <div className="creature-list-container">{coordinates.lat} {coordinates.lon}</div>
        <Divider orientation="vertical" />
        <div className="map-container">map</div>
      </div>
    </div>
  );
}

export default App;
