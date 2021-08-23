var express = require("express");

var app = express();

const porta = 80;

app.get("/", (req, res) => {
  console.log(req);
  res.send("Bem vindo!");
});

app.get("/:professor", registra, trata);

function registra(req, res, next) {
  console.log(`Nova requisição recebida às ${Date.now()}`);

  if (req.params.professor == "pedro") {
    res.send("Não quero que trate requisição do Pedro!");
  } else {
    next();
  }
}

function trata(req, res) {
  res.send(`Olá ${req.params.professor}`);
}

app.listen(porta, () => {
  console.log(`Servidor executado na porta ${porta}`);
});
