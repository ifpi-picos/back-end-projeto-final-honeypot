const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 

const ApiarioSchema = new mongoose.Schema({
    endereco: {
        type: String,
        required: true,
    },
    quantidade: {
        type: String,
        required: true,
    },
    responsavel: {
        type: String,
        required: true,
    },

    cadastro: {
        type: String,
        required: true,
    },

    ovos: {
       type: String,
       required: true,
       
    },
   florada: {
        type: String,
        required: true,
        
    },
    realeiras: {
        type: String,
        required: true,
       
    },

});

const Apiario = mongoose.model("Apiario", ApiarioSchema);
module.exports = Apiario;
//transforma o objeto em modelo a ser chamado
