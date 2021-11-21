export type CityResponseType = {
  country: string,
  state: string,
  stateCountry: string,
  city: string,
  neighborhood: string,
  street: string,
}

export type TemperatureType = {
  kelvin: number,
  celsius: number,
  farenheit: number,
}

export type TempResponseType = {
  data: TemperatureType,
  feels: TemperatureType,  
}

export type WindResponseType = {
  speed: number,
  deg: number,
  gust: number,
}

export type WeatherResponseType = {
  id: number,
  main: string,
  description: string,
  temperature: TempResponseType,
  pressure: number,
  humidity: number,
  wind: WindResponseType,
  clouds: number,
  sunrise: number,
  sunset: number,
}

export type ResponseType = {
  code: number,
  message: string,
  data?: {
    city: CityResponseType,
    weather: WeatherResponseType,
  },
}

export type CoordsType = {
  latitude: number,
  longitude: number,
}