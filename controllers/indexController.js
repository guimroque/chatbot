var User = require('../models/User');
var Stage = require('../fluxos/index');
class index{
    

    async message(req, res){
        var message = req.body
        //console.log(message.json)
        try{//recebendo informações da plataforma
            //para acessar basta usar os campos .user, .name, .message
            var result = await User.findUser(message.user)//fazer uma busca para nomes de usuario e bot ja salvos
            var msg = {
                user_id:message.user,
                name:message.name,
                message:message.message,
            }
            console.log(message.botName)//printando nome do bot
            if(result){
                console.log("Redirecionando ao fluxo ", result[0].fluxo)
                Stage[result[0].fluxo].obj.execute(msg);
            }else{
                Stage.fluxo000.obj.execute(msg);
                console.log("salvo no banco de dados a primeira mensagem, retornando true")
            }
            res.sendStatus(200)
        }catch{
            console.log("erro, try principal")
        }
    }
    
    async response(req, res){
        try{
            var user = req.params.usera
            user = 'whatsapp:'+user
            var result = []
            await setTimeout(async function(){
                result = await User.getResponse(user)
                res.send({channel:result[0].response})
            }, 5000);
            
            
        }catch(err){
            console.log("erro ao responder"+err)
        }
    }

     
}

module.exports = new index()