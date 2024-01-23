

const userModel = require("../models/UserModel")
const ExameModel = require("../models/ExameModel")

const renderHomePage = async (request, response) =>{

    try{

        console.log('Tabela de pacientes criada com sucesso.');
        return response.render("index")
        
    }catch(error){
        console.log(`Não foi possivel carragar a página ${error.message}`)
    }
}


const renderUser = async (request, response)=>{
    try{
        const exames = await ExameModel.getAllExames()
        
        return response.render("cadastraUser", {exames})

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
        if(!user.exame &&  !user.exame2){
            return response.status(400).send('É necessário cadastrar um exame no sistema!');
        }
        if(user.exame == "" && user.exame2 == ""){
            return response.status(400).send('É necessário cadastrar ao menos um exame.');
        }

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


const renderEditUserForm = async (request, response)=>{

    try{
        const userId = request.params.id_paciente
        // console.log(userId)
        const userArray = await userModel.obterUserById(userId)

        const user = userArray[0]

        // console.log("Usuário retornado com sucesso!")
        // console.log(user)
        console.log(user.id_paciente)
        return response.render("editaUser", {user})
       

    }catch(error){
        console.log("Usuário não encontrado!")
    }
}   

const updateUser = async (request, response) =>{

   
    try{
        const userId = request.params.id_paciente;
        console.log("Id do user" + userId)

        const user = request.body;

        await userModel.atualizarDados(userId, user)

        response.redirect("/listUsers");

    }catch(error){

        return response.status(500).send("Não foi possível realizar a atualização.");
    }
}

const deleteUser = async (request, response) =>{

     try{

        const userId = request.params.id_paciente;

        await userModel.apagarUser(userId)

        return response.redirect("/listUsers")


    }catch(error){
        console.log("Erro ao apagar usuário: " + error.message)
        return response.status(500).send("Não foi possível realizar a atualização.");

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

//Dava pra reutilizar code, mas por organização achei melhor!
const reportUser = async (request, response) =>{
    
    try{    
        const userId = request.params.id_paciente;

        const userArray = await userModel.reportById(userId)

        const user = userArray[0]
        console.log(user)


        return response.render("reportUser", {user})
    }catch(error){
        response.status(500).send('Erro ao retornar paciente');
        throw error
    }
}









//Exportando os métodos 

module.exports = {
    renderHomePage,
    renderUser,
    insertUser,
    listUser,
    renderEditUserForm,
    updateUser,
    deleteUser,
    reportUser,
    
}