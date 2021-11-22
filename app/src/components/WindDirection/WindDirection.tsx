import React from 'react';

import style from './WindDirection.module.css';
import icon from '../../icons/webfont.module.css';

interface IWindDirectionProps {
  speed: number,
  deg: number,
  gust: number,
}

export default function WindDirection({ speed, deg, gust }: IWindDirectionProps) {

  const rotateStyle = { transform: `rotate(${deg - 180}deg)` };
  
  return (
    <div className={style.windDirection}>
      <span className={style.header}>Wind</span>
      <span className={`${style.icon} ${icon['diw-compass-north']}`} style={rotateStyle}></span>
      <table className={style.windInfo}>
        <tbody>
          <tr className={style.info}>
            <td>Speed:</td>
            <td>{speed}mps</td>
          </tr>
          <tr className={style.info}>
            <td>Gust:</td>
            <td>{gust}mps</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}