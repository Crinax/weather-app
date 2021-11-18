import React, { useState, useEffect } from 'react';
import WeatherCard from '../WeatherCard';
import dotenv from 'dotenv';

dotenv.config();

type CoordsType = {
  latitude: number,
  longitude: number,
}

function App() {
  const [coords, setCoords] = useState<CoordsType>();
  useEffect(() => {
    if (!coords) {
      navigator.geolocation.getCurrentPosition((location) => setCoords(location.coords));
    }
  })

  return (
    <WeatherCard coords={coords}></WeatherCard>
  );
}

export default App;
