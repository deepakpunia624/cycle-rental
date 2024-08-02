require("dotenv").config();

const express = require("express");

require("./config/modelConfig");
require("./seed");

const app = express();

const commonRouter = require("./routes/mainRoutes");

app.use(express.json());

app.use("/", commonRouter);

//............................run the server.......................................
const server = app.listen(process.env.PORT, (req, res) => {
  console.log(`server is running on port no: ${process.env.PORT}`);
});

module.exports = server;
