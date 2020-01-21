const mongoose = require('mongoose');

const FuncionarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    username: {
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

const Funcionario = mongoose.model("Funcionario", FuncionarioSchema);
module.exports = Funcionario;
//transforma o objeto em modelo a ser chamado