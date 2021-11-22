import React from 'react';

import WeatherCard from '../WeatherCard';
import dotenv from 'dotenv';
import WeatherStore from '../../.stores/WeatherStore';
import { observer } from 'mobx-react-lite'

dotenv.config();
WeatherStore.init();

const ObservableWeatherCard = observer(() => (<WeatherCard weatherData={WeatherStore.weatherData}></WeatherCard>))

function App() {

  return (
    <div className="App">
      <ObservableWeatherCard />
    </div>
  );
}

export default App;

