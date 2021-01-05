var knex = require('../database/connection')
var db = require('../fluxos/strings')

async function execute(result){
    try{
        var data = {}
        data.fluxo_anterior = 'fluxo000',
        data.fluxo = 'fluxo002',
        data.user_id = result.user_id,
        data.name = result.name
        data.response = 'Olá meu nome é Miguel, sou o assistente virtual da Cardaps, em que posso ajudá-lo? \n'
        +db.introducao.text+'\n'+db.menuprincipal.text
        await knex.insert(data).table("users");
    }catch{
        console.log("erro ao adicionar usuario")
    }
    console.log("oi")
    
}

exports.execute = execute;