import React from 'react';

import style from './City.module.css';
import { CityResponseType } from '../../types';

interface ICityProps {
  data: CityResponseType;
}

export default function City({ data }: ICityProps) {
  const filteredCityArr = Object.values(data).filter((item) => item !== '');
  const positionText = filteredCityArr.join(', ');

  return (
    <div className={style.city}>
      {positionText}
    </div>
  )
}