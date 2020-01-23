const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
// valida o oacesso do usuari

const ColetaSchema = new mongoose.Schema({
    apiarios: {
        type: String,
        required: true,
    },
    responsavel: {
        type: String,
        required: true,
    },
    dataExtracao: {
        type: String,
        required: true,
    },
    quantidadeExtraida: {
        type: String,
        required: true,
    },
    cor: {
        type: String,
        required: true,
    },

    pote250: {
        type: String,
        required: true,
    },

    pote500: {
        type: String,
        required: true,
    },

    pote1l: {
        type: String,
        required: true,
  
    },

    tambor  : {
        type: String,
        required: true,
  
    },


});


const Coleta = mongoose.model("Coleta", ColetaSchema);
module.exports = Coleta;
//transforma o objeto em modelo a ser chamado
