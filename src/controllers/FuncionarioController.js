const mongoose = require('mongoose');

//chamando o model funcionario
const Funcionario = mongoose.model('Funcionario');

module.exports = {
    //esse comando vai buscar todos os funcionarios cadastrados dentro do BD
    async index(req, res){
        const funcionarios = await Funcionario.find();

        return res.json(funcionarios);
        //retorna um arquivo .json com todos os funcionarios
    },


    async registro(req, res){
        //criar um funcionario
        const funcionario = await Funcionario.create(req.body);
        // cria um funcionario com o body da requisição

        //retorna o funcionario criado
        return res.json(funcionario);

    },
};