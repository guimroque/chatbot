var knex = require('../database/connection')
var data = require('../fluxos/strings')
async function execute(result){
    if(result.message == '2'){
        result.response = 'Certo, confira novamente nosso menu\n\n'+data.menuprincipal.text
        result.fluxo = 'fluxo002'
        //atendimento encerrado
    }else{
        var bug = {}
            bug.user_id = result.user_id,
            bug.problema = result.message
            try{
                await knex.insert(bug).table('bugs')           
            }catch{
                console.log('erro ao salvar bug')
            }
        result.response = data.feedbackBug.text+'\n'+data.feedbackBug.menuBug
        result.fluxo = 'fluxo005'
    }try{
        await knex.update(result).where({user_id:result.user_id}).table("users")
    }catch{
        console.log("erro")
    }
    
}

exports.execute = execute;