const express = require("express");
const app = express();

app.use(express.static("frontend/build"));

app.get("/", (req, res) => res.send("hello"));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`app running on ${PORT}`));
