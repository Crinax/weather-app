import React, { useState } from 'react';

import style from './WeatherCard.module.css';
import WeatherHeader from '../WeatherHeader';
import { ResponseType } from './types';
import { interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import dotenv from 'dotenv';

dotenv.config({ path: '../../../../serv/.env' });

interface IWeatherCardProps {
  coords: {
    latitude: number,
    longitude: number,
  },
}

const WeatherCard: React.FC<IWeatherCardProps> = ({ coords }): JSX.Element => {
  const { latitude, longitude } = coords;
  const baseUrl = `http://localhost:${process.env.PORT}`;

  const [weatherData, setWeatherData] = useState<ResponseType>();
  const [secret, setSecret] = useState<string>('API_KEY');
  const [url, setUrl] = useState<string>(`${baseUrl}/api/v1/key=${secret}&latitude=${latitude}&longitude=${longitude}`);

  console.log({ url, secret });

  let timeout = 2000;
  interval(timeout).subscribe({
    next: () => {
      const secretRequest$ = ajax(`${baseUrl}/api/v1/secret`).subscribe({
        next: (res) => {
          console.log(`New secret: ${res.response}`);
          setSecret(res.response as string);
          setUrl(`${baseUrl}/api/v1/key=${secret}&latitude=${latitude}&longitude=${longitude}`);
          secretRequest$.unsubscribe();
        },
        error: (err) => console.log(err)
      });
      const weatherRequest$ = ajax(url).subscribe({
        next: (res) => {
          console.log(`New weather: `, res.response);
          setWeatherData(res.response as ResponseType);
          weatherRequest$.unsubscribe();
        },
        error: (err) => console.log(err),
      });
      timeout = 1000 * 60 * 3;
    },
    error: (err) => console.log(err),
  });

  return (
    <div className={style.weatherCard}>
      <WeatherHeader weatherData={weatherData} />
    </div>
  );
}

export default WeatherCard;