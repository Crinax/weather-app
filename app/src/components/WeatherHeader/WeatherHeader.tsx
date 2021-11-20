import React from 'react';

import { ResponseType } from '../../types';

interface IWeatherHeaderProps {
  weatherData: ResponseType,
}

function WeatherHeader({ weatherData }: IWeatherHeaderProps): JSX.Element {
  if (weatherData.data) {
    const { code, data, message } = weatherData as ResponseType;
    if (code === 200 && data) {
      const { weather } = data;
      return (<div>{weather.description}</div>)
    }
    return (<div>Error {code}: {message}</div>)
  }
  return (
    <div></div>
  );
}

export default WeatherHeader;