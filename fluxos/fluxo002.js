var knex = require('../database/connection')
var data = require('../fluxos/strings')
async function execute(result){
    if(result.message == '1'){
        result.response = data.op1.text
        result.fluxo = 'fluxo001'
        //atendimento encerrado
    }else if(result.message == '2'){
        result.response = data.op2.text+'\n'+data.adesao.text
        result.fluxo = 'fluxo003'
    }else if(result.message == '3'){
        result.response = data.op3.text+'\n'+data.adesao.text
        result.fluxo = 'fluxo003'
    }else if(result.message == '4'){
        result.response = data.op4.text
        result.fluxo = 'fluxo004'
    }
    else{
        result.response = data.erro.text+'\n\n'+data.menuprincipal.text
    }
    try{
        await knex.update(result).where({user_id:result.user_id}).table("users")
    }catch{
        console.log("erro")
    }
    
}

exports.execute = execute;