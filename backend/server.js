const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./database/mongodb"); // Importa a conexão com MongoDB
const router = require("./routes/router");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/", router);

const port = 8080;

// Conecte-se ao MongoDB e depois inicie o servidor
async function startServer() {
  try {
    // Conectando ao MongoDB
    await connectToDatabase();

    // Inicializando o servidor
    app.listen(port, () => {
      console.log("Server running at port: " + port);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor: ", error);
  }
}

startServer(); // Executa a função para conectar ao MongoDB e iniciar o servidor
