import React from 'react';

import style from './DataTable.module.css';
import icon from '../../icons/webfont.module.css';

interface ISunPointsProps {
  sunrise: string,
  sunset: string,
  speed: number,
  gust: number,
}

export default function DataTable({ sunrise, sunset, gust, speed }: ISunPointsProps) {
  const formatedSunrise = sunrise.replace(':', 'h ').replace(':', 'm ') + 's';
  const formatedSunset = sunset.replace(':', 'h ').replace(':', 'm ') + 's';
  const gustElement = (
    <tr className={style.pointsRow}>
      <td className={style.pointText}>
        <span className={`${style.hidden} ${style.icon} ${icon['diw-wind']}`}></span>
      </td>
      <td className={style.pointText}>Gust: {gust}mps</td>
    </tr>
  );


  return (
    <table className={style.sunPointsTable}>
      <tbody className={style.sunPoints}>
        <tr className={style.pointsRow}>
          <td className={style.pointText}>
            <span className={`${style.icon} ${icon['diw-wind']}`}></span>
          </td>
          <td className={style.pointText}>Speed: {speed}mps</td>
        </tr>
        {gust ? gustElement : null}
        <tr className={style.pointsRow}>
          <td className={style.pointText}>
            <span className={`${style.icon} ${icon['diw-sun-rise']}`}></span>
          </td>
          <td className={style.pointText}>{formatedSunrise}</td>
        </tr>
        <tr className={style.pointsRow}>
          <td className={style.pointText}>
            <span className={`${style.icon} ${icon['diw-sun-set']}`}></span>
          </td>
          <td className={style.pointText}>{formatedSunset}</td>
        </tr>
      </tbody>
    </table>
  );
}