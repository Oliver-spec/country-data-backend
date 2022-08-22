const express = require("express");
const app = express();
const cors = require("cors");
const countryApiRouter = require("./controllers/countryApiRouter");
const countryCodesRouter = require("./controllers/countryCodesRouter");
const weatherApiRouter = require("./controllers/weatherApiRouter");
const middleware = require("./utils/middleware");

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

app.use("/allCountries", countryApiRouter);
app.use("/data", countryCodesRouter);
app.use("/weather", weatherApiRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.unknownEndpoint);

module.exports = app;
