const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/mensagens", function (req, res) {
  res.send("exibir todas as mensagens");
});

app.listen(3000);
