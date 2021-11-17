import React, { useState } from 'react';
import WeatherCard from '../WeatherCard';

const App: React.FC = () => {
  const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });
  
  navigator.geolocation.watchPosition((location) => {
    setCoords(location.coords);
  });

  return (
    <WeatherCard coords={coords}></WeatherCard>
  );
}

export default App;
