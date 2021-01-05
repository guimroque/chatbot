var knex = require('../database/connection')
var data = require('../fluxos/strings')
async function execute(result){
    if(result.message == '1'){
        result.response = data.feedbackBug.sim+'\n\n'+data.encerrandoAtendimento.text
        result.fluxo = 'fluxo001'
        //atendimento encerrado
    }else if(result.message == '2'){
        result.response = data.menuprincipal.text
        result.fluxo = 'fluxo002'
    }else{
        try{
            var response = await knex.select("*").from('bugs').where({user_id:result.user_id})
            if(response[0]){
                var bug = {}
                    bug.user_id = result.user_id
                    bug.problema = response[0].problema+'\t'+result.message
                try{
                    await knex.insert(bug).table('bugs')           
                }catch{
                    console.log('erro ao salvar bug')
                }
            }else{
                console.log('bug nao encontrado')
            }
        }catch{
            console.log('erro ao buscar bug no BD')
        }
        console.log('item adicional adicionado')
        result.response = data.feedbackBug.adicionar+'\n'+data.encerrandoAtendimento.text
        result.fluxo = 'fluxo001'
        console.log(result.message)
    }try{
        await knex.update(result).where({user_id:result.user_id}).table("users")
    }catch{
        console.log("erro")
    }
    
}

exports.execute = execute;