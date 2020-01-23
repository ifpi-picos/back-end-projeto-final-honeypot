const express = require('express');
const funcionario = require('./funcionario');
const apiario = require('./apiario_router');


const router = express.Router();

router.use('/funcionario', funcionario);
router.use('/apiario', apiario);
router.get('/', (req, res) => res.send('API RODANDO AQUI!!!'));

module.exports = router;