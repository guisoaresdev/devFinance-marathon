const { MongoClient } = require("mongodb");
require("dotenv").config(); // Para usar variáveis de ambiente

const connectURI = `mongodb+srv://soaresguidev:${process.env.DB_PASSWORD}@cluster.bbc2s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster`;

let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(connectURI);

    try {
      await client.connect();
      console.log("Conectado ao MongoDB com sucesso!");
    } catch (err) {
      console.error("Erro ao conectar ao MongoDB: ", err);
      throw err; // Propaga o erro para ser tratado no código principal
    }
  }
  return client;
}

module.exports = { connectToDatabase };
