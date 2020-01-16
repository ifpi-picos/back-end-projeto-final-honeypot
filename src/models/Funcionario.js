const mongoose = require('mongoose');
// chama o mongoose novemente


// aqui cria o Schema fucionario em um objeto.json

const FuncionarioSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    funcao: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },

});

mongoose.model('Funcionario', FuncionarioSchema);
//transforma o objeto em modelo a ser chamado