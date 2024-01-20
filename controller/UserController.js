
//Método da minha rota raiz
const userLogin = (request, response) =>{
    
    return response.render("index")
    
}

//Método da minha rota home 

const homeApp = (request, response) =>  response.render("home")








//Exportando os métodos 

module.exports = {

    userLogin,
    homeApp,
}