import React from 'react';

import styles from './WeatherHeader.module.css';
import { ResponseType, CityResponseType, WeatherResponseType } from '../../types';
import WeatherIcon from '../WeatherIcon';
import Temperature from '../Temperature';
import City from '../City';

interface IWeatherHeaderProps {
  weatherData: ResponseType,
  isDay: boolean,
}

function WeatherHeader({ weatherData, isDay }: IWeatherHeaderProps): JSX.Element | null {
  if (!weatherData.data) {
    const { code } = weatherData as ResponseType;
    if (code === 200) {
      return null;
    }
    return null;
  }
  const { city, weather } = weatherData.data as {
    id: number,
    city: CityResponseType;
    weather: WeatherResponseType;
  };

  return (
    <div className={styles.weatherHeader}>
      <WeatherIcon id={weather.id} name={weather.main} description={weather.description} isDay={isDay} />
      <Temperature temp={weather.temperature} />
      <City data={city} />
    </div>
  );
}

export default WeatherHeader;