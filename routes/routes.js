
// Carrega o método router do Express.js
const routes = require("express").Router()

//Faz uma requisição para o nosso módulo UserController
const userController = require("../controller/UserController")


routes.get("/create", userController.renderUser)
routes.post("/create", userController.insertUser)

routes.get("/listUsers", userController.listUser)

routes.get("/updateUser/:id_paciente", userController.renderEditUserForm);
routes.post("/updateUser/:id_paciente", userController.updateUser)

routes.post("/deleteUser/:id_paciente", userController.deleteUser)


//Exportando meu módulo de rotas

module.exports = routes