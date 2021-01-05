var knex = require('../database/connection')
var data = require('../fluxos/strings')
async function execute(result){
    if(result.message == '1'){
        result.response = 'Certo, aqui estão as informações pra se cadastrar\n\n'+data.op1.text
        result.fluxo = 'fluxo001'
        //atendimento encerrado
    }else if(result.message == '2'){
        result.response = 'Tudo bem, confira nosso menu novamente\n\n'+data.menuprincipal.text
        result.fluxo = 'fluxo002'
    }
    else{
        result.response = data.erro.text+'\n\n'+data.adesao.text
        result.fluxo = 'fluxo003'
    }
    try{
        await knex.update(result).where({user_id:result.user_id}).table("users")
    }catch{
        console.log("erro")
    }
    
}

exports.execute = execute;