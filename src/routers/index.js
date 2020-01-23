const express = require('express');
const funcionario = require('./funcionario');
const apiario = require('./apiario_router');
<<<<<<< HEAD
//const login = require('./login')
=======
const coleta = require('./coleta_router');


>>>>>>> bf22510e8e16331a89fd228b3557d0b0bc1a03f4
const router = express.Router();

router.use('/coleta', coleta);
router.use('/funcionario', funcionario);
router.use('/apiario', apiario);
//router.use('/login', login);
router.get('/', (req, res) => res.send('API RODANDO AQUI!!!'));

module.exports = router;