
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
    
        return response.redirect("/listExames")

    }catch(error){
        console.log("Erro ao cadastrar exame" + error.message)
        return  response.status(500).send('Erro ao cadastrar Exame!.')
    }
   


}

const getAllExames = async (request, response) =>{

    try{    

        
        const exames = await exameModel.getAllExames()


        return response.render("listagemExame", {exames})

    }catch(error){
        console.log("Erro ao retornar exames" + error.message)
        return  response.status(500).send('Erro ao retornar exames!.')
    }
   


}


const getExameById = async (request, response) =>{

    try{    

        const exameId = request.params.id_exame;
        
        const examesArray = await exameModel.getExameById(exameId)
       
        const exame = examesArray[0]
        console.log(exame)

        console.log("Exame retornado com sucesso!")

        return response.render("editaExame", {exame})

        
    }catch(error){
        console.log("Não foi possivel retornar o exame! " + error.message)
        throw error.message
    }
   


}







module.exports = {
    renderCreateExame,
    insertExames,
    getAllExames,
    getExameById,
}


