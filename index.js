const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const port = 3000;
const mensagens = [
  {
    id: 1,
    texto: "Primeira mensagem",
  },
  {
    id: 2,
    texto: "Segunda mensagem",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

// Create
app.post("/mensagens", (req, res) => {
  const mensagem = req.body;
  mensagem.id = mensagens.length + 1;
  mensagens.push(mensagem);
  res.send("mensagem criada com sucesso");
});

// Read all
app.get("/mensagens", (req, res) => {
  res.send(mensagens);
});

// Read single
app.get("/mensagens/:id", (req, res) => {
  const id = +req.params.id;
  const mensagem = mensagens.find((msg) => msg.id === id);
  res.send(mensagem);
});

// Update
app.put("/mensagens/:id", (req, res) => {
  const id = +req.params.id;
  const mensagem = req.body;
  mensagem.id = id;
  const index = mensagens.findIndex((msg) => msg.id === id);
  mensagens[index] = mensagem;

  res.send("mensagem editada com sucesso");
});

// Delete
app.delete("/mensagens/:id", (req, res) => {
  const id = +req.params.id;
  const index = mensagens.findIndex((msg) => msg.id === id);
  delete mensagens[index];
  res.send("mensagem removida com sucesso");
});

app.listen(port, () => {
  console.info("Servidor rodando em http://localhost:" + port);
});
