
//Requisição para o meu módulo database
const db = require("../database/db")



//Criando a tabela de exames

const createExams = async () =>{
    console.log("Chamou minha functions")
    try{

        const connection = await db.connectionToDb();

        await connection.query(  `
            
            CREATE TABLE IF NOT EXISTS exames (
            id_exame INT AUTO_INCREMENT PRIMARY KEY,
            code VARCHAR(5) UNIQUE NOT NULL,
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

const getExameById = async (exameId) =>{
    try{

        const connection = await db.connectionToDb();
        const value = [exameId];

        const result = await connection.query('SELECT * FROM exames WHERE id_exame = ?', value)


     

        console.log("Exame retornado com sucesso!")
        
        return result[0]
        

    }catch(error){
        console.log("Não foi possivel retornar o exame! " + error.message)
        throw error.message
    }
}

//Atualizar usuário
const atualizarDados = async (exameId, exame) =>{
    
    try{
        const connection = await db.connectionToDb();

         const values = [exame.codeExame, exame.descExame, exame.valorExame, exameId]  

        await connection.query('UPDATE exames SET code= ?, desc_exame= ?, valor_exame= ? WHERE id_exame= ?', values);

        console.log("Exame atualizado com sucesso") 
        
        
    }catch(error){
        console.log("Não foi possivel atualizar o Exame!" + error.message)
        throw error
    }
   
}


const apagarExame = async (exameId) =>{

    try{
        
        const connection = await db.connectionToDb();
        const value = [exameId]

        await connection.query("DELETE FROM exames WHERE id_exame = ?", value);

        console.log("Exame deletado com sucesso!")

    } catch(error){

        console.log("Falha ao deletar exame!" + error.message)
        throw error
    }
}












module.exports = {
    insertExames,
    getAllExames,
    getExameById,
    atualizarDados,
    apagarExame,
   
}






