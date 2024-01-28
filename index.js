const express = require("express");
const app = express();
const port = 443;

app.get("/", function (req, res) {
  res.send("¡Hola, mundo!");
});

app.listen(port, function () {
  console.log("App rodando!");
});
