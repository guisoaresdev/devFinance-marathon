const express = require("express");
const path = require("path");
const { connectToDatabase } = require("../database/mongodb"); // Importa a conexão com MongoDB

const router = express.Router();

const rootdir = "C:/Users/gui_c/Documents/Guilherme/Workspace/devFinance/";
const front_rootdir = rootdir + "frontend";

router.use(express.static(path.join(front_rootdir, "build")));

router.get("*", (req, res) => {
  res.sendFile(path.join(front_rootdir, "build", "index.html"));
});

router.get("/users", async (req, res) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("nome_do_seu_banco"); // Nome do banco de dados

    const users = await db.collection("users").find({}).toArray(); // Exemplo de query
    res.json(users); // Retorna os usuários como JSON
  } catch (err) {
    res.status(500).send("Erro ao buscar usuários: " + err.message);
  }
});

module.exports = router;
