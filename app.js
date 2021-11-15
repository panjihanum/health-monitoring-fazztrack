require("dotenv").config();
const express = require("express");
const { checkFazztrack } = require("./services/checkSites");

const app = express();

app.listen(process.env.SERVER_PORT || 5000, async () => {
  await checkFazztrack();
});
