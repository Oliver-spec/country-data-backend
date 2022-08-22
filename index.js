const http = require("http");
const app = require("./app");
const { PORT } = require("./utils/configs");

const server = http.createServer(app);

server.listen(PORT, () => console.log(`app running on ${PORT}`));
