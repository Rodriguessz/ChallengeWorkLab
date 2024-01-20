
const db = require("../database/db")


//Método da minha rota raiz
const userLogin = async (request, response) =>{

    const consulta = await db.listUser()
    return response.json(consulta)
    
}




//Método da minha rota home 

const homeApp = (request, response) =>  response.render("home")








//Exportando os métodos 

module.exports = {

    userLogin,
    homeApp,
}