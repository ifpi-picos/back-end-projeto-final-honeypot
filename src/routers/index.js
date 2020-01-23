const express = require('express');
const funcionario = require('./funcionario');
const apiario = require('./apiario_router');
const coleta = require('./coleta_router');

const router = express.Router();

router.use('/coleta', coleta);
router.use('/funcionario', funcionario);
router.use('/apiario', apiario);
router.get('/', (req, res) => res.send('API RODANDO AQUI!!!'));

module.exports = router;