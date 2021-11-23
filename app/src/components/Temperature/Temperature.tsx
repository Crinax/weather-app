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
      <tbody className={style.tempTableBody}>
        <tr className={style.dataTemperature}>
          <td className={style.tempHeaderValue}>Meteorological</td>
          <td className={style.tempHeaderValue}>Feels like</td>
        </tr>
        <tr className={style.dataTemperature}>
          <td className={style.tempValue}>{data.celsius.toFixed()} &deg;C / {data.farenheit.toFixed()} &deg;F</td>
          <td className={style.tempValue}>{feels.celsius.toFixed()} &deg;C / {feels.farenheit.toFixed()} &deg;F</td>
        </tr>
      </tbody>
    </table>
  );
}