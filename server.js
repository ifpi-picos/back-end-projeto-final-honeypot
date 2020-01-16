const express = require('express'); //chamando o express
const mongoose = require('mongoose') // chamando o mongoose
const requireDir = require('require-dir');
//inicando o express
const app = express();
//permite enviar objetos .json
app.use(express.json());



//inicando o DB
mongoose.connect("mongodb+srv://cinthia_adm:cinthia@cluster0-fn4xn.mongodb.net/honeypotdb?retryWrites=true&w=majority", {
        //link de acesso ao banco de dados online
        useUnifiedTopology: true,
        useNewUrlParser: true,
        //itens para evitar erros de coneção com o banco
    });

//usando o require-dir para ficar chamando os models existentes
requireDir('./src/models');

//chamando um model para inserir valores
//const Funcionario = mongoose.model('Funcionario');

//Usando Rotas
app.use('/api', require("./src/routes"));


//definindo porta para executar aplicação
app.listen(3000);