import React from 'react';

import style from './WindDirection.module.css';
import icon from '../../icons/webfont.module.css';

interface IWindDirectionProps {
  deg: number,
}

export default function WindDirection({ deg }: IWindDirectionProps) {

  const rotateStyle = { transform: `rotateZ(${deg - 180}deg)` };
  
  return (
    <div className={style.windDirection}>
      <span className={`${style.cardinalDir} ${style.north}`}>N</span>
      <div className={style.compass}>
        <span className={`${style.cardinalDir} ${style.western}`}>W</span>
        <span className={`${style.icon} ${icon['diw-compass-north']}`} style={rotateStyle}></span>
        <span className={`${style.cardinalDir} ${style.eastwood}`}>E</span>
      </div>
      <span className={`${style.cardinalDir} ${style.south}`}>S</span>
    </div>
  );
}