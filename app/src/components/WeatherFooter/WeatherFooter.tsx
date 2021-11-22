import React from 'react';

import style from './WeatherFooter.module.css';
import WindDirection from '../WindDirection';
import SunPoints from '../SunPoints';
import { WindResponseType } from '../../types';

interface IWeatherFooterProps {
  pressure: number,
  humidity: number,
  wind: WindResponseType,
  clouds: number,
  sunrise: number,
  sunset: number,
}

export default function WeatherFooter({ wind, sunrise, sunset }: IWeatherFooterProps) {

  const sunriseDate = new Date(sunrise * 1000).toTimeString();
  const sunsetDate = new Date(sunset * 1000).toTimeString();

  const sunriseTime = sunriseDate.slice(0, 8);
  const sunsetTime = sunsetDate.slice(0, 8);

  return (
    <div className={style.weatherFooter}>
      <WindDirection speed={wind.speed} deg={wind.deg} gust={wind.gust} />
      <SunPoints sunrise={sunriseTime} sunset={sunsetTime} />
    </div>
  )
}