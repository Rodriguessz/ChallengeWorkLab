
// Carrega o método router do Express.js
const routes = require("express").Router()

//Faz uma requisição para o nosso módulo UserController
const userController = require("../controller/UserController")




routes.get("/", userController.listUser)

routes.post("/", userController.insertUser)

routes.get("/list", userController.listUser)


//Exportando meu módulo de rotas

module.exports = routes