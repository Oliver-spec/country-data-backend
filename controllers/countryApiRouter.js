const countryApiRouter = require("express").Router();
const axios = require("axios");

const countryApiUrl = "https://restcountries.com/v3.1/all";

countryApiRouter.get("/", async (req, res, next) => {
  try {
    const countries = await axios.get(countryApiUrl);
    res.json(countries.data);
  } catch (err) {
    next(err);
  }
});

module.exports = countryApiRouter;
