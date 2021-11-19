const express = require("express");
const axios = require("axios");
const bodyparser = require("body-parser");
const crypto = require("crypto");

const app = express();
app.use(bodyparser.json());
const port = 3000;

let responseAuth;

// Lancement du service
app.listen(port, () => {
  console.log(`Service listening at http://localhost:${port}`);
});
