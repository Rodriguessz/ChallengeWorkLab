
//Requisição para o meu módulo database
const db = require("../database/db")



//Criando a tabela de exames

const createExams = async () =>{
    console.log("Chamou minha functions")
    try{

        const connection = await db.connectionToDb();

        await connection.query(  `
        
            CREATE TABLE IF NOT EXISTS exames (
            code VARCHAR(5) PRIMARY KEY,
            desc_exame VARCHAR(255) NOT NULL,
            valor_exame DECIMAL(10,2)
    )
    
`)

    console.log("Tabela de Exames criada com sucesso!")

    }catch(error){
        console.log(`Não foi possivel criar a tabela: ${error.message}`)
    }
   
}
createExams();


const insertExames = async (exame) => {
    
    try{


        const connection = await db.connectionToDb() //Espera fazer a conexão
        const values = [exame.codeExame, exame.descExame , exame.valorExame];
        await connection.query('INSERT INTO exames (code, desc_exame, valor_exame) VALUES (?,?,?)', values)

        console.log("Exame inserido com sucesso")

    }catch(error){
        console.log("Não foi possivel cadastrar o exame!" + error.message)
        throw error.message
    }
}


const getAllExames = async () => {
    try{
        const connetion = await db.connectionToDb();

        const result = await connetion.query("SELECT * FROM exames");
        console.log("Exames retornados com sucesso!")
        return result[0]

    }catch(error){
        console.log("Não foi possivel buscar os exames no banco de dados!")
    }
}








module.exports = {
    insertExames,
    getAllExames,
}






