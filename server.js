const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.json());

const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/mydb";

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Conectado ao MongoDB"))
  .catch(err => console.error("❌ Erro de conexão MongoDB:", err));

app.get("/", (req, res) => {
  res.send("🚀 API Node.js + Express + MongoDB rodando!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
