var knex = require('../database/connection')
var data = require('../fluxos/strings')

async function execute(result){
    result.fluxo_anterior = 'fluxo001'
    result.response = 'Que bom ver voce novamente '+result.name+'\n'
    +'\n'+data.introducao.text+'\n'+data.menuprincipal.text
    
    result.fluxo = 'fluxo002'
    try{
        await knex.update(result).where({user_id:result.user_id}).table("users")
    }catch{
        console.log("erro")
    }
    
}

exports.execute = execute;