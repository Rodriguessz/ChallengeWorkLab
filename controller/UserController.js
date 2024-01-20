

const userModel = require("../models/UserModel")


//Método da minha rota raiz
const userLogin = async (request, response) =>{

    return response.render("cadastro")
    
}


const insertUser = async (request, response)=>{
    const user = request.body;
    console.log(user)
 

    // return response.json({name: typeof user})
    // console.log(`O request.body aqui ${request.body}`)
    try{
    
        await userModel.inserirDados(user);
        response.status(201).send('Usuário inserido com sucesso!.')
        

    }catch(error){
        console.error(error);
        response.status(500).send('Erro ao processar o formulário.');
    }
}

const listUser = async (request, response) =>{
    
    try{
        const result = await userModel.listarDados();

        return response.json(result)
        
    }catch(error){
        response.status(500).send('Erro ao listar dados!');
        throw error
    }
}








//Exportando os métodos 

module.exports = {

    userLogin,
    insertUser,
    listUser,
    

}