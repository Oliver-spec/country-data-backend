import { useState, useEffect } from "react";
import api from "../services/api";

export default function Weather({ country }) {
  if (!country.capital) {
    country.capital = country.name.common;
  }

  // variables
  const api_key = process.env.REACT_APP_API_KEY;

  // states
  const [weather, setWeather] = useState({});

  // effects
  useEffect(() => {
    api
      .getWeather(country, api_key)
      .then((response) => setWeather(response.data));
  }, [country, api_key]);

  if (Object.keys(weather).length === 0) {
    return (
      <div>
        <h1>Weather in {country.capital}</h1>
        <p>Can't find weather in {country.capital}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Weather in {country.capital}</h1>
        <p>Temperature {weather.main.temp}°C</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>{weather.weather[0].description}</p>
        <p>Wind {weather.wind.speed} m/s</p>
      </div>
    );
  }
}
