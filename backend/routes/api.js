const express = require("express");
const path = require("path");
const { connectToDatabase } = require("../database/mongodb"); // Importa a conexão com MongoDB

const router = express.Router();

router.get("/transactions", async (req, res) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("devFinance"); // Nome do banco de dados

    const transactions = await db.collection("transactions").find({}).toArray(); // Exemplo de query
    res.json(transactions); // Retorna os usuários como JSON
  } catch (err) {
    res.status(500).send("Erro ao buscar usuários: " + err.message);
  }
});

router.post("/transactions", async (req, res) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("devFinance");

    // Obtém os dados do corpo da requisição
    const { description, amount, date } = req.body;

    // Insere a nova transação no MongoDB
    const result = await db.collection("transactions").insertOne({
      description,
      amount,
      date: new Date(date), // Converte para data
    });

    client.close();

    res.status(201).json({ message: "Transação inserida com sucesso", result });
  } catch (error) {
    res.status(500).json({ message: "Erro ao inserir transação", error });
  }
});

module.exports = router;
