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
  const mensagem = req.body.text;
  mensagens.push(mensagem);
  res.send("mensagem criada com sucesso");
});

// Read all
app.get("/mensagens", (req, res) => {
  res.send(mensagens);
});

// Read single
app.get("/mensagens/:id", (req, res) => {
  const id = req.params.id - 1;
  const mensagem = mensagens[id];
  res.send(mensagem);
});

// Update
app.put("/mensagens/:id", (req, res) => {
  const id = req.params.id - 1;
  const mensagem = req.body.text;
  mensagens[id] = mensagem;
  res.send("mensagem editada com sucesso");
});

// Delete
app.delete("/mensagens/:id", (req, res) => {
  const id = req.params.id - 1;
  delete mensagens[id];
  res.send("mensagem removida com sucesso");
});

app.listen(port, () => {
  console.info("Servidor rodando em http://localhost:" + port);
});
