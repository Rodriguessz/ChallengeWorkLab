
// Carrega o método router do Express.js
const routes = require("express").Router()

//Faz uma requisição para o nosso módulo UserController
const userController = require("../controller/UserController")
const ExameController = require("../controller/ExameController")



routes.get("/", userController.renderHomePage)

routes.get("/create", userController.renderUser)
routes.post("/create", userController.insertUser)

routes.get("/listUsers", userController.listUser)

routes.get("/updateUser/:id_paciente", userController.renderEditUserForm);
routes.post("/updateUser/:id_paciente", userController.updateUser)

routes.post("/deleteUser/:id_paciente", userController.deleteUser)

routes.get("/reportUser/:id_paciente", userController.reportUser);






routes.get("/createExame", ExameController.renderCreateExame)
routes.post("/createExame", ExameController.insertExames)

routes.get("/updateExame/:id_exame", ExameController.renderEditExamForm)
routes.post("/updateExame/:id_exame", ExameController.updateExame)


routes.post("/deleteExame/:id_exame",ExameController.deleteExame)






routes.get("/listExames", ExameController.getAllExames)

















//Exportando meu módulo de rotas

module.exports = routes