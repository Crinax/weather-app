import React from 'react';

import style from './WeatherCard.module.css';
import WeatherHeader from '../WeatherHeader';
import { ResponseType } from '../../types';
import Loader from '../Loader';

const backgroundsDict: { [key: string]: string } = {
  'Thunderstorm': style.weatherCardThunder,
  'Drizzle': style.weatherCardDrizzle,
  'Rain': style.weatherCardRain,
  'Snow': style.weatherCardSnow,
  'Clear': style.weatherCardClear,
  'Clouds': style.weatherCardClouds,
  'Atmosphere': style.weatherCardFog,
}

interface IWeatherCardProps {
  weatherData: ResponseType,
}



function WeatherCard({ weatherData }: IWeatherCardProps) {
  let bgColor = '';
  let classes = [style.weatherCard];
  
  const { code, message, data } = weatherData as ResponseType;
  let theme = style.weatherCardDay;
  
  if (code === 0) {
    return (<Loader />);
  } else if (code !== 200) {
    return (<Loader message={message} error />);
  }
  
  if (data) {
    bgColor = backgroundsDict[data.weather.main];
  }

  const date = new Date();
  let nowDate = date.toLocaleDateString();
  let splitSymbol = '/';

  if (nowDate.indexOf('.') !== -1) splitSymbol = '.';
  
  nowDate = nowDate.split(splitSymbol).reverse().join('/');
  const nightBorders = {
    dayBegin: {
      up: new Date(`${nowDate}, 00:00:00`),
      down: new Date(`${nowDate}, 05:59:59`),
    },
    dayEnd: {
      up: new Date(`${nowDate}, 18:00:00`),
      down: new Date(`${nowDate}, 23:59:59`),
    },
  }

  if (
    (nightBorders.dayBegin.up <= date && nightBorders.dayBegin.down < date) ||
    (nightBorders.dayEnd.up >= date && nightBorders.dayEnd.down < date)
  ) theme = style.weatherCardNight;

  console.log({ date, nightBorders, theme, bgColor });

  classes = [style.weatherCard, theme, bgColor ? bgColor : ''];
  let strClasses = classes.join(' ');

  return (
    <div className={strClasses}>
      <WeatherHeader weatherData={weatherData} isDay={theme === style.weatherCardDay}/>
    </div>
  );
}

export default WeatherCard;
