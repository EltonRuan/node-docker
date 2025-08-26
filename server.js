// server.js
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.json());

const mongoUri = process.env.MONGO_URI || "mongodb://root:example@mongo_db:27017/mydb?authSource=admin";

// Conectar Mongo
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado ao MongoDB"))
  .catch(err => console.error("Erro MongoDB:", err));

// Schema simples
const User = mongoose.model("User", new mongoose.Schema({
  name: String,
  email: String
}));

// Rotas
app.get("/", (req, res) => res.send("🚀 API Node.js + Express + MongoDB rodando!"));

app.post("/users", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));
