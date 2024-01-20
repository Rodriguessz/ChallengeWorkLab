//Iniciando a conexão com o meu banco de dados MySql

const mysql = require("mysql2/promise");

const client = mysql.createPool(process.env.CONNECTION_STRING)

async function listUser(){
    const consulta = await client.query("SELECT * FROM pacientes")
    return consulta[0]
}




module.exports = {
    listUser
}