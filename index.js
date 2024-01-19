//Fazendo a requisição para o module express
const express = require("express");

//Iniciando uma nova aplicação express - Retorna um obj express
const app = express();

//Exportando meu arquivo de configuração de ambiente

const dotenv = require("dotenv");
dotenv.config();

//Configurando rotas

app.get("/", (request, response) => {
  response.send("Iniciou normalmente!");
});

//Inicia meu servidor Express
app.listen(process.env.PORT, () => {
  console.log("Projeto iniciado e rodando em http://localhost:3000/");
});
