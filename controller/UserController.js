

const userModel = require("../models/UserModel")





const insertUser = async (request, response)=>{
    const user = request.body;
    console.log(user)
 

    // return response.json({name: typeof user})
    // console.log(`O request.body aqui ${request.body}`)
    try{
    
        await userModel.inserirDados(user);
        
        return response.redirect("/")
        

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

    insertUser,
    listUser,
    

}