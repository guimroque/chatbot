var Database = require("../models/index");


class index{
    constructor(){//trazendo banco de dados para o arquivo
        this.user = Database["user"];                
    }

    async getUser(user){
        user = JSON.parse(user.name)
        console.log("pelo service: "+ user)
        return true
    }
}

module.exports = new index()