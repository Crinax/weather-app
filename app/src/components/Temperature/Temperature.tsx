import React from 'react';

import style from './Temperature.module.css';
import { TempResponseType } from '../../types';

interface ITemperatureProps {
  temp: TempResponseType;
}

export default function Temperature({ temp }: ITemperatureProps) {
  const { data, feels } = temp;

  return (
    <table className={style.temperature}>
      <tbody>
        <tr className={style.dataTemperature}>
          <td className={style.tempHeaderValue}>Meteorological:</td>
          <td className={style.tempValue}>{data.kelvin.toFixed(2)} &deg;K</td>
          <td className={style.tempValue}>{data.celsius.toFixed(2)} &deg;C</td>
          <td className={style.tempValue}>{data.farenheit.toFixed(2)} &deg;F</td>
        </tr>
        <tr className={style.dataTemperature}>
          <td className={`${style.tempHeaderValue} ${style.tempHeaderFeels}`}>Feels like:</td>
          <td className={style.tempValue}>{feels.kelvin.toFixed(2)} &deg;K</td>
          <td className={style.tempValue}>{feels.celsius.toFixed(2)} &deg;C</td>
          <td className={style.tempValue}>{feels.farenheit.toFixed(2)} &deg;F</td>
        </tr>
      </tbody>
    </table>
  );
}