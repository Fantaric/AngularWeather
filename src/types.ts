export interface RootObject {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

export interface Hour {
  temp_c: number;
  condition: Condition2;
  wind_kph: number;
  wind_dir: string;
  pressure_mb: number;
  precip_mm: number;
  humidity: number;
  cloud: number;
  uv: number;
}

export interface Astro {
  sunrise: string;
  sunset: string;
}

export interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  avgtemp_c: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition2;
}

export interface Condition2 {
  text: string;
  icon: string;
  code: number;
}

export interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  is_day: number;
  condition: Condition;
  precip_mm: number;
  uv: number;
}

export interface Condition {
  text: string;
  icon: string;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}