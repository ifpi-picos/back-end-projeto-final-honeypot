//inicando o express
const express = require('express');

//imporanto a biblioteca Routes do express
const routes = express.Router();

//importando o FuncionarioController
const FuncionarioController = require("../src/controllers/FuncionarioController");

//primeira rota
routes.get('/funcionarios', FuncionarioController.index);
routes.post('/funcionarios', FuncionarioController.registro)

module.exports = routes;