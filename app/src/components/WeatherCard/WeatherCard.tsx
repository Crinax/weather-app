import React, { useState } from 'react';

import style from './WeatherCard.module.css';
import WeatherHeader from '../WeatherHeader';
import { ResponseType } from './types';
import axios from 'axios';

async function corsRequest<T>(url: string): Promise<T> {
  const headers = {
    'Access-Control-Allow-Origin': '*',
  };
  const result = await axios({
    method: 'GET',
    url,
    headers,
  });
  return await result.data as T;
}

interface IWeatherCardProps {
  coords: {
    latitude: number,
    longitude: number,
  } | undefined,
}

function WeatherCard({ coords }: IWeatherCardProps) {
  const [weatherData, setWeatherData] = useState<ResponseType>();
  const [isRequested, setIsRequested] = useState<boolean>(false);
  const [bgColor, setBgColor] = useState<string>();
  const [classes, setClasses] = useState<string[]>([style.weatherCard])
  
  let theme = style.weatherCardDay;

  if (coords) {
    const { latitude, longitude } = coords;
    const baseUrl = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;
    const url = `${baseUrl}/api/v1/weather?&latitude=${latitude}&longitude=${longitude}`;

    if (!isRequested) {
      const backgroundsDict: { [key: string]: string } = {
        'Thunderstorm': style.weatherCardThunder,
        'Drizzle': style.weatherCardDrizzle,
        'Rain': style.weatherCardRain,
        'Snow': style.weatherCardSnow,
        'Clear': style.weatherCardClear,
        'Clouds': style.weatherCardClouds,
      }

      corsRequest<ResponseType>(url).then((response) => {
        if (response.data.weather) {
          setBgColor(backgroundsDict[response.data.weather.main]);
        } else {
          setBgColor(undefined);
        }
        setWeatherData(response);
        setIsRequested(true);
      });
    }
    const date = new Date();
    const nowDate = date.toLocaleDateString();
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

    setClasses([style.weatherCard, theme, bgColor ? bgColor : '']);

    return (
      <div className={classes.join(' ')}>
        <WeatherHeader weatherData={weatherData} />
      </div>
    );
  }
  return null;
}

export default WeatherCard;
