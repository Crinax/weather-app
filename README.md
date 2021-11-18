# Weather App

## About
Application on React that shows weather  

## Installation
- Clone repo
- Inside the root of project directory run `yarn`. **Attention**: Use only yarn
- The next step: inside of `serv` dir create `.env` file with next contents:
```env
	PORT="<Your free port for server>"
	MAPQUEST_KEY="<API key for MapQuest>"
	OPENWEATHER_KEY="<API key for OpenWeather>"
```
- And inside of `app` dir create `.env` file with next contents:
```env
	REACT_APP_SERVER_PORT="<Server port from the previous step>"
```
- In root of project run:
- 1. `yarn serve` - run server
- 2. `yarn run-app` - run react app (frontent)
- 3. `yarn start` - run both server and react app (probably work only on Linux)

## API methods
API default path: `http://localhost:{PORT}/api/v1`

### Methods
- `/weather?latitude={latitude}&longitude={longitude}` - get the weather for this coordinates

### Response fields
- Get the weather for this coordinates
	- `code: number` - code of request (possible codes: 200, 400, 500).
	- `messgae: string` - message status (for response code 200 message equals "ok", for another code message equals error description).
	- `data?: object` - exists only whith `code = 200`. Contains answer for request.
		- `city: object` - contains data of geo position.
			- `country: string` - country.
			- `state: string` - state.
			- `stateCountry: string` - state (smaller than previous).
			- `city: string` - city.
			- `neighborhood: string` - neighborhood.
			- `street: string` - street.
		- `weather: object` - contains data of weather.
			- `main: string` - group of the weather.
			- `description: string` - detailed name of the weather.
			- `temperature: object` - data of temperature.
				- `data: object` - contains meteorological temperature
					- `kelvin: number` - temperature in Kelvin.
					- `celsius: number` - temperature in Celsius.
					- `farenheit: number` - temperature in Farenheit.
				- `feels: object` - contains feels like temperature
					- `kelvin: number` - temperature in Kelvin.
					- `celsius: number` - temperature in Celsius.
					- `farenheit: number` - temperature in Farenheit.
			- `pressure: number` - pressure.
			- `humidity: number` - humidity.
			- `wind: object` - contains data of wind.
				- `speed: number` - speed.
				- `deg: number` - direction.
				- `gust: number` - gust.
			- `clouds: number` - persentage of cloud cover.
			- `sunrise: number` - time of sunrise for this day.
			- `sunset: number` - time of sunset for this day.