import React from 'react';

import style from './SunPoints.module.css';
import icon from '../../icons/webfont.module.css';

interface ISunPointsProps {
  sunrise: string,
  sunset: string,
}

export default function SunPoints({ sunrise, sunset }: ISunPointsProps) {
  const formatedSunrise = sunrise.replace(':', 'h ').replace(':', 'm ') + 's';
  const formatedSunset = sunset.replace(':', 'h ').replace(':', 'm ') + 's';

  return (
    <table className={style.sunPointsTable}>
      <tbody className={style.sunPoints}>
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