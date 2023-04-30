export interface WeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export const DEFAULT_WEATHER_DATA: WeatherData = {
  coord: { lon: 0, lat: 0 },
  weather: [],
  base: '',
  main: {
    temp: 0, pressure: 0, humidity: 0, temp_min: 0, temp_max: 0,
    feels_like: 0
  },
  visibility: 0,
  wind: { speed: 0, deg: 0 },
  clouds: { all: 0 },
  dt: 0,
  sys: { type: 0, id: 0, country: '', sunrise: 0, sunset: 0 },
  id: 0,
  name: '',
  cod: 0,
  timezone: 0
};
