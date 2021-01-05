

var stages = {
    fluxo000:{
        descricao: "Boas vindas a um novo usuario",
        obj:require('./fluxo000')
    },
    fluxo001:{
        descricao: "Boas vindas a um usuario já existente no BD",
        obj:require('./fluxo001')
    },
    fluxo002:{
        descricao: "Interpreta mensagem do menu enviada pelo bot, e redireciona a um novo fluxo",
        obj:require('./fluxo002')
    },
    fluxo003:{
        descricao: "Interpreta mensagem do menu sobre contratação, e redireciona ao fluxo de instruções",
        obj:require('./fluxo003')
    },
    fluxo004:{
        descricao: "Fluxo de solução de problemas",
        obj:require('./fluxo004')
    },
    fluxo005:{
        descricao: "Fluxo de feedback da solução de problemas, e envio aos colaboradores",
        obj:require('./fluxo005')
    }
}


module.exports = stages;