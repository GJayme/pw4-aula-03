var express = require("express");
const fetch = require("node-fetch");

var app = express();

const ambiente = require("./chave.js");

app.use(express.urlencoded({ extended: false }));

app.use(express.json);

app.post("/", async function (req, res) {
  console.log(`Buscando informações sobre o filme de código: ${req.body.id}`);

  const url_api = `http://www.omdbapi.com/?i=${req.body.id}&apikey=${ambiente.chave}`;
  const resposta = await fetch(url_api);
  const json = await resposta.json();

  res.send(json.title);
});

app.listen(80, () => {
  console.log("servidor na porta 80");
});
