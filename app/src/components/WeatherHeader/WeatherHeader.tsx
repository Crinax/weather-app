import React from 'react';

import { ResponseType } from '../WeatherCard/types';

interface IWeatherHeaderProps {
  weatherData?: ResponseType,
}

const WeatherHeader: React.FC<IWeatherHeaderProps> = ({ weatherData }): JSX.Element => {
  console.log(weatherData);
  if (weatherData) {
    const { weather } = weatherData.data;
    return (<div>{weather.description}</div>)
  }
  return (
    <div></div>
  );
}

export default WeatherHeader;