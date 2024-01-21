

const userModel = require("../models/UserModel")



const renderUser = async (request, response)=>{
    try{
        return response.render("cadastraUser")
    }catch(error){
        console.log(error.message)
    }
}

const insertUser = async (request, response)=>{

   

    //Infos da requisição enviada pelo body
    const user = request.body;
    // return response.json({name: typeof user})
    // console.log(`O request.body aqui ${request.body}`)
    try{

        if (user.exame === user.exame2) {
            return response.status(400).send('Os exames selecionados são iguais. Selecione exames diferentes.');
        }


        const serviceNumber = Math.round(Math.random() * 100000);
        console.log(serviceNumber)
        await userModel.inserirDados(user, serviceNumber);
        console.log("Usuário cadastrado com sucesso!")
        console.log(user)
        
        return response.redirect("/listUsers")
        

    }catch(error){
        console.error(error);
        response.status(500).send('Erro ao processar o formulário.');
    }
}

const listUser = async (request, response) =>{
    
    try{

        const userList = await userModel.listarDados();
        console.log(userList)
        
        // return response.json(userList)
        return response.render("listagem", {userList})
        
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