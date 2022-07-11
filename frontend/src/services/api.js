import axios from "axios";

const api_proxy = "https://express-api-proxy-0451.herokuapp.com/";

function getAll() {
  return axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => response.data);
}

function getWeather(capital) {
  return axios
    .post(`${api_proxy}weather`, {
      URL: `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&APPID=api_key`,
    })
    .then((response) => response.data);
}

const functions = { getAll, getWeather };

export default functions;
