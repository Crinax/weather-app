import React from 'react';

import { ResponseType } from '../WeatherCard/types';

interface IWeatherHeaderProps {
  weatherData?: ResponseType,
}

function WeatherHeader({ weatherData }: IWeatherHeaderProps): JSX.Element {
  if (weatherData && weatherData.code === 200) {
    const { weather } = weatherData.data;
    return (<div>{weather.description}</div>)
  }
  return (
    <div></div>
  );
}

export default WeatherHeader;