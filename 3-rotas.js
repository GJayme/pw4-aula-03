var express = require("express");

var app = express();

const porta = 80;

app.use("/", require("./3-indicesRotas.js"));

app.listen(porta, () => {
  console.log(`Servidor executado na porta ${porta}`);
});
