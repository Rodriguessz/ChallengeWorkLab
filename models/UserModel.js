
const db = require("../database/db")


//Cria a tabela de pacientes

const createTable = async () =>{

    try{
        const connection = await db.connectionToDb()
        await connection.query(
  
          `
                CREATE TABLE IF NOT EXISTS pacientes (
                id_paciente INT AUTO_INCREMENT PRIMARY KEY,
                nome_paciente VARCHAR(255) NOT NULL
                
            )
        `
        )
        console.log('Tabela de pacientes criada com sucesso.');
    }catch(error){
        console.log(`Não foi possivel criar a tabela: ${error.message}`)
    }
}

createTable()



//Inserir dados no BD

const inserirDados = async (user) =>{
    
    try{
        const values = [user.name]
        const connection = await db.connectionToDb();
        await connection.query('INSERT INTO pacientes (nome_paciente) VALUES (?)', values); 
        
    }catch(error){
        console.error('Erro ao inserir dados no banco de dados:', error.message);
        throw new Error('Erro ao inserir dados no banco de dados.');
    }
    
}


const listarDados = async (request, response) =>{
    const connection = await db.connectionToDb()

    try{
       const userList =  await connection.query("SELECT * FROM pacientes");
        console.log("Listagem realizada com sucesso!")
        return userList[0]
       
    }catch(error){
        console.log(`Não foi listar os dados: ${error.message}`)
    }
}




module.exports = {
   
    inserirDados,
    listarDados,
    
}