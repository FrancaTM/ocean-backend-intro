const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectId } = require("mongodb");

(async () => {
  const url = "mongodb://localhost:27017";
  const dbName = "ocean_backend_intro_database";

  console.info("conectando ao banco de dados MongoDB...");
  const client = await MongoClient.connect(url, { useUnifiedTopology: true });
  console.info("MongoDB conectado com sucesso");

  const db = client.db(dbName);

  const app = express();

  app.use(bodyParser.json());

  const port = 3000;

  const mensagens = db.collection("mensagens");

  app.get("/", (req, res) => {
    res.send("Hello World");
  });

  // Create
  app.post("/mensagens", async (req, res) => {
    const mensagem = req.body;
    await mensagens.insertOne(mensagem);
    res.send(mensagem);
  });

  // Read all
  app.get("/mensagens", async (req, res) => {
    // TODO: fix!
    res.send(await mensagens.find().toArray());
  });

  // Read single
  app.get("/mensagens/:id", async (req, res) => {
    const id = req.params.id;
    const mensagem = await mensagens.findOne({ _id: ObjectId(id) });
    res.send(mensagem);
  });

  // Update
  app.put("/mensagens/:id", async (req, res) => {
    const id = req.params.id;
    const mensagem = req.body;

    await mensagens.updateOne({ _id: ObjectId(id) }, { $set: { ...mensagem } });

    res.send("mensagem editada com sucesso");
  });

  // Delete
  app.delete("/mensagens/:id", async (req, res) => {
    const id = req.params.id;
    await mensagens.deleteOne({ _id: ObjectId(id) });
    res.send("mensagem removida com sucesso");
  });

  app.listen(port, () => {
    console.info("Servidor rodando em http://localhost:" + port);
  });
})();
