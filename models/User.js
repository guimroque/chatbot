var knex = require('../database/connection')

class User{

    async createUser(name, user_id){//inserindo novo usuario ao banco de dados
        try{
            await knex.insert({name, user_id, fluxo:"fluxo000"}).table("users");
            return
        }catch(err){
            console.log(err)
        }
    }

    async findUser(user_id){//buscando se registro de usuario existe no BD
        try{
            var user = await knex.select("*").from("users").where({user_id:user_id});
            if(user.length > 0){
                return user
            }else{
                return false
            }
        }catch(err){
            console.log("erro ao buscar usuario")
        }
    }

    async getResponse(user_id){
        try{
            var user = await knex.select("*").from("users").where({user_id:user_id})
            return user
        }catch{
            console.log("erro ao buscar resposta no BD")
        }
    }

}

module.exports = new User();