
const db =  require("../database/db")
const userModel = require("../models/UserModel")

//Método da minha rota raiz
const userLogin = async (request, response) =>{

    
    return response.render("index")
    
}









//Exportando os métodos 

module.exports = {

    userLogin,
    

}