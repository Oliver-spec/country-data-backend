const countryCodeRouter = require("express").Router();
const fs = require("fs-extra");

countryCodeRouter.get("/", async (req, res, next) => {
  try {
    const codes = await fs.readJSON("./database/CountryCodes.json");
    res.json(codes);
  } catch (err) {
    next(err);
  }
});

module.exports = countryCodeRouter;
