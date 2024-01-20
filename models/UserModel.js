
const db = require("../database/db")


//Cria a tabela de pacientes

const createTable = async () =>{

    try{
        const connection = await db.connectionToDb()
        await connection.query(
  
          `
                CREATE TABLE IF NOT EXISTS pacientes (
                id_paciente INT AUTO_INCREMENT PRIMARY KEY,
                nome_paciente VARCHAR(255) NOT NULL,
                numero_atendimento VARCHAR(20) UNIQUE,
                sexo_paciente VARCHAR(10) NOT NULL,
                email_paciente VARCHAR(255) NOT NULL UNIQUE,
                celular_paciente VARCHAR(20) NOT NULL
            )
        `
        )
        console.log('Tabela de pacientes criada com sucesso.');
    }catch(error){
        console.log(`Não foi possivel criar a tabela: ${error.message}`)
    }
}

createTable()




module.exports = {
   
    
}