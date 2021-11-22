import React from 'react';

import style from './WeatherIcon.module.css';
import icon from '../../icons/webfont.module.css';

interface IWeatherIconProps {
  id: number,
  name: string,
  description: string,
  isDay: boolean,
}

export default function WeatherIcon({ id, name, description, isDay }: IWeatherIconProps) {
  let iconStyle: string = isDay ? icon['diw-sun'] : icon['diw-moon-stars'];
  switch (id) {
    // Thunderstorm
    case 230:
    case 231:
    case 232:
      iconStyle = icon['diw-cloud-drizzle-lightning'];
      break;
    
    case 200:
    case 201:
    case 202:
      iconStyle = icon['diw-cloud-rain-lightning'];
      break;

    case 210:
    case 211:
    case 212:
    case 221:
      iconStyle = icon['diw-cloud-lightning'];
      break;

    // Drizzle
    case 300:
    case 301:
    case 302:
    case 310:
      iconStyle = icon['diw-cloud-drizzle'];
      break;

    case 311:
    case 312:
    case 313:
    case 314:
    case 315:
      iconStyle = icon['diw-cloud-hail'];
      break;

    // Rain
    // 615-616: Snow -> Rain and snow
    case 500:
    case 501:
    case 511:
    case 615:
    case 616:
      iconStyle = icon['diw-cloud-rain-2'];
      break;

    case 502:
    case 503:
    case 520:
      iconStyle = icon['diw-cloud-rain'];
      break;

    case 504:
    case 521:
    case 522:
    case 531:
      iconStyle = icon['diw-rain'];
      break;

    // Show
    case 600:
    case 601:
    case 611:
    case 612:
      iconStyle = icon['diw-snow'];
      break;

    case 602:
    case 613:
    case 620:
    case 621:
    case 622:
      iconStyle = icon['diw-cloud-snow'];
      break;

    // Atmosphere
    case 701:
    case 721:
      iconStyle = isDay ? icon['diw-cloud-fog-sun'] : icon['diw-cloud-fog-moon']
      break;

    case 711:
    case 731:
    case 741:
      iconStyle = icon['diw-fog'];
      break;

    case 751:
    case 761:
    case 762:
      iconStyle = icon['diw-cloud-fog-2'];
      break;

    case 771:
      iconStyle = icon['diw-wind'];
      break;

    case 781:
      iconStyle = icon['diw-tornado'];
      break;

    // Clear
    case 800:
      iconStyle = isDay ? icon['diw-sun'] : icon['diw-moon-stars'];
      break;

    // Clouds
    case 801:
      iconStyle = isDay ? icon['diw-cloud-sun'] : icon['diw-cloud-moon'];
      break;

    case 802:
      iconStyle = isDay ? icon['diw-clouds-sun'] : icon['diw-clouds-moon'];
      break;

    case 803:
      iconStyle = icon['diw-cloud'];
      break;

    case 804:
      iconStyle = icon['diw-clouds'];
  }

  return (
    <div className={style.weatherIcon}>
      <span className={`${style.icon} ${iconStyle}`}></span>
    </div>
  );
}