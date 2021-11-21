import axios from 'axios';
import { makeAutoObservable } from 'mobx';
import { CoordsType, ResponseType } from '../types';

class WeatherStore {
  constructor() {
    makeAutoObservable(this);
    this.weatherData = { code: 0, message: 'Not sended' }
  }

  weatherData: ResponseType;

  async init() {
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => await this.setWeatherData(coords),
      (err) => {
        this.weatherData  = { code: 502, message: 'Geoposition error: enable GPS or try to reload page' };
        console.log(err);
      },
      { enableHighAccuracy: true }
    );
  }

  
  private async setWeatherData(coords: CoordsType) {
    this.weatherData = await this.sendRequest(coords);
  }

  private async corsRequest<T>(url: string) {
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

  private async sendRequest({ latitude, longitude }: CoordsType) {
    const baseUrl = `http://localhost:${process.env.REACT_APP_SERVER_PORT}`;
    const url = `${baseUrl}/api/v1/weather?&latitude=${latitude}&longitude=${longitude}`;

    return await this.corsRequest<ResponseType>(url);
  }
}

export default new WeatherStore();