const weatherApiRouter = require("express").Router();
const axios = require("axios");
const { WEATHER_API_KEY } = require("../utils/configs");

weatherApiRouter.get("/:capital", async (req, res, next) => {
  try {
    const capital = req.params.capital;
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&APPID=${WEATHER_API_KEY}`
    );
    res.json(weather.data);
  } catch (err) {
    next(err);
  }
});

module.exports = weatherApiRouter;
