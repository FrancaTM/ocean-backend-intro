const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/mensagens", (req, res) => {
  res.send("exibir todas as mensagens");
});

app.listen(3000);
