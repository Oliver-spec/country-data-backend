require("dotenv").config();
// console.log(process.env);
const express = require("express");
const fs = require("fs-extra");
const cors = require("cors");
const axios = require("axios").default;

const app = express();

app.use(express.static("frontend/build"));
app.use(cors());

// get dialcodes
app.get("/data", (req, res) => {
  const dialCodes = fs.readJSONSync("./database/CountryCodes.json");
  // console.log(dialCodes);
  res.json(dialCodes);
});

// 3rd party api call to get country data
app.get("/allCountries", (req, res) => {
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((countries) => res.json(countries.data));
});

// 3rd party weather api
app.get("/weather/:capital", (req, res) => {
  const capital = req.params.capital;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&APPID=${process.env.WEATHER_API_KEY}`
    )
    .then((weather) => res.json(weather.data));
});

app.listen(process.env.PORT, () =>
  console.log(`app running on ${process.env.PORT}`)
);
