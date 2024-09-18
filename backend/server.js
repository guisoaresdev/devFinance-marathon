const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectToDatabase } = require("./database/mongodb"); // Importa a conexão com MongoDB
const apiRoutes = require("./routes/api");
const path = require("path");

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Serve o frontend estático
const frontRootDir = path.join(__dirname, "../frontend", "build");
app.use(express.static(frontRootDir));

// Rotas da API
app.use("/api", apiRoutes);

// Rota padrão para o frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(frontRootDir, "index.html"));
});

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
