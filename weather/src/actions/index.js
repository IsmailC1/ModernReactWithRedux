import axios from "axios";

const API_KEY = "9dce61c7c8faa9f1c0478315f19b0ca3";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log("Request:", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
