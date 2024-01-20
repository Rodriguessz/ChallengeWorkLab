//Iniciando a conexão com o meu banco de dados MySql

const mysql = require("mysql2/promise");

//Estabele a conexão com o BD e verifica se foi realizada
const connectionToDb = async () =>{
    try{
        const connection = await mysql.createPool(process.env.CONNECTION_STRING)
        console.log("Conexão com o banco de dados estabelecida com sucesso")
        return connection
        
    }catch(error){
        console.error('Erro ao estabelecer conexão com o banco de dados:', error.message);
        
    }
} 





//Exporta os métodos do múdulo
module.exports = {
    
  connectionToDb
  
};
