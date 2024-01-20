
//Requires ->

//Fazendo a requisição para o module express
const express = require("express");
//Exportando meu arquivo de configuração de ambiente
const dotenv = require("dotenv");
dotenv.config();


//Fazendo a requisição para o meu módulo de rotas

const routes = require("./routes/routes");

//Responsável pelo direcionamento das pastas
const path = require("path");
const exp = require("constants");



//Constantes -> 

//Iniciando uma nova aplicação express
const app = express();


//App configuration -> 

//Configurando qual a engine irá renderizar o meu front
app.set("view engine", "ejs")

//Falando para o app usar o caminho de pasta public para procurar meus arquivos estáticos
app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended: true })); //PRECISA CONFIGURAR ANTES DAS ROTAS ANIMAL - Certifique-se de que a configuração do middleware express.urlencoded seja feita antes do uso das rotas. Isso é importante para que o corpo da solicitação seja analisado antes de chegar às rotas.


//Configurando rotas
app.use(routes);







//Inicia meu servidor Express
app.listen(process.env.PORT, () =>  console.log(`Projeto iniciado e rodando em http://localhost:${process.env.PORT}`));
