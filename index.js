const express = require("express");
const fs = require("fs-extra");
const cors = require("cors");

const app = express();

app.use(express.static("frontend/build"));
app.use(cors());

app.get("/data", (req, res) => {
  const dialCodes = fs.readJSONSync("./database/CountryCodes.json");
  // console.log(dialCodes);
  res.send(dialCodes);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`app running on ${PORT}`));
