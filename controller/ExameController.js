
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


const renderEditExamForm = async (request, response)=>{

    try{
        const exameId = request.params.id_exame
        
        const exameArray = await exameModel.getExameById(exameId)

        const exame = exameArray[0]

      
        console.log(exame)

        return response.render("editaExame", {exame})
       

    }catch(error){
        console.log("Exame não encontrado!" + error.message)
        throw error.message
    }
}   

const updateExame = async (request, response) =>{

   
    try{
        const exameId = request.params.id_exame;
        console.log("Id do Exame" + exameId)

        const exame = request.body;

        await exameModel.atualizarDados(exameId, exame)

        response.redirect("/listExames");

    }catch(error){

        return response.status(500).send("Não foi possível realizar a atualização.");
    }
}

const deleteExame = async (request, response) =>{

    try{

       const exameId = request.params.id_exame;

       await exameModel.apagarExame(exameId)

       return response.redirect("/listExames")


   }catch(error){
       console.log("Erro ao apagar exame: " + error.message)
       return response.status(500).send("Não foi possível realizar a atualização.");

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










module.exports = {
    renderCreateExame,
    insertExames,
    renderEditExamForm,
    updateExame,
    deleteExame,
    getAllExames,
   
}


