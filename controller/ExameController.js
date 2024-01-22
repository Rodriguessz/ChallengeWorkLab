

const  exameModel = require("../models/ExameModel")


const renderCreateExame = async (request, response) =>{
    try{
       
        
     return response.render("cadastraExame")
        
    
    }catch(error){

        console.log("Deu ruim"+ error.message)
    }
}



const insertExames = async (request, response) =>{

    try{    

        const exame = request.body;
    
        await exameModel.insertExames(exame)
    
        return response.redirect("/createExame")

    }catch(error){
        console.log("Erro ao cadastrar exame" + error.message)
        return  response.status(500).send('Erro ao cadastrar Exame!.')
    }
   


}







module.exports = {
    renderCreateExame,
    insertExames,
}


