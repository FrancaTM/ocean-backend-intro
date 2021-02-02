const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const port = 3000;
const mensagens = ["Primeira mensagem", "Segunda mensagem"];

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Create
app.post("/mensagens", (req, res) => {
  res.send(req.body.text);
});

// Read all
app.get("/mensagens", (req, res) => {
  res.send(mensagens);
});

app.listen(port, () => {
  console.info("Servidor rodando em http://localhost:" + port);
});
