import axios from "axios";

function getAll() {
  return axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => response.data);
}

function getWeather(capital, api_key) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&APPID=${api_key}`
  );
}

const functions = { getAll, getWeather };

export default functions;
