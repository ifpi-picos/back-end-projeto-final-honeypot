const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routers/index')
const database =  require('./src/config/database')
const mongoose =  require('mongoose')
const app = express();

// conexão com o banco de dados 
mongoose.connect("mongodb+srv://cinthia_adm:cinthia@cluster0-fn4xn.mongodb.net/honeypotdb?retryWrites=true&w=majority", {
        //link de acesso ao banco de dados online
        useUnifiedTopology: true,
        useNewUrlParser: true,
        //itens para evitar erros de coneção com o banco
    });


app.use(bodyParser.json());
app.use(router);

app.listen(3000), () => {
    database();
    console.log("App Online");
}