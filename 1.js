var express = require("express");
var fs = require("fs");

var app = express();

const porta = 80;

app.get("/", (req, res) => {
  console.log(req);
  res.send("Bem vindo!");
});

//: nome indica que o "nome será uma variavel nos parametros (req.params.nome)
//? indica que o elemento anterior é opcional
//+ indica a presenção de Um ou mais do elemento anterior
//* indica combinação
// também é possivel utilizar REGEX

app.get("/aula/:disciplina", (req, res) => {
  console.log(req.params);
  res.send(`Informações sobre a disciplina ${req.params.disciplina}`);
});

app.get("/req", function (req, res) {
  fs.writeFile("objeto.txt", "req", (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send("Bem vindo ao tratador da quisição");
});

app.listen(porta, () => {
  console.log(`Servidor executado na porta ${porta}`);
});
