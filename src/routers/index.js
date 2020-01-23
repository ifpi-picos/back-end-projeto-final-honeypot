const express = require('express');
const funcionario = require('./funcionario')


const router = express.Router();

router.use('/funcionario', funcionario)

router.get('/', (req, res) => res.send('App Funcionario!!!'));

module.exports = router;