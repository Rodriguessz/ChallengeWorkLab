
// Carrega o método router do Express.js
const routes = require("express").Router()

//Faz uma requisição para o nosso módulo UserController
const userController = require("../controller/UserController")


routes.get("/create", userController.renderUser)


routes.get("/", userController.listUser)

routes.post("/create", userController.insertUser)




//Exportando meu módulo de rotas

module.exports = routes