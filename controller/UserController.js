

const userModel = require("../models/UserModel")



const renderUser = async (request, response)=>{
    try{
        return response.render("cadastraUser")
    }catch(error){
        console.log(error.message)
    }
}

const insertUser = async (request, response)=>{
    const user = request.body;
   
    // return response.json({name: typeof user})
    // console.log(`O request.body aqui ${request.body}`)
    try{
        
        await userModel.inserirDados(user);
        console.log("Usuário cadastrado com sucesso!")
        console.log(user)
        
        return response.redirect("/create")
        

    }catch(error){
        console.error(error);
        response.status(500).send('Erro ao processar o formulário.');
    }
}

const listUser = async (request, response) =>{
    
    try{

        const userList = await userModel.listarDados();
        console.log(userList)

        return response.render("cadastro", {userList})
        
    }catch(error){
        response.status(500).send('Erro ao listar dados!');
        throw error
    }
}






//Exportando os métodos 

module.exports = {
    renderUser,
    insertUser,
    listUser,
}