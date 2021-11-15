require("dotenv").config();
const express = require("express");
const services = require("./services");

const app = express();

app.listen(process.env.SERVER_PORT || 5000, async () => {
  await services.checkSites();
});
