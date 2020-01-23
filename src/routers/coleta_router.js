const express = require("express");
const ColetaController = require("../controllers/ColetaController");
const Coleta = require("../models/Coleta");
const coletaController = new ColetaController(Coleta);

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const funDTO = req.body;
        console.log('cheguei');
        const coletaSaved = await coletaController.save(funDTO);
        res.send(coletaController);
    } catch (e) {
        console.error(e);
        res.status(400).send(error.message);
    }
});

router.get("/", async (req, res) => {
    try {
        console.log('route')
        const coletas = await coletaController.get();
        res.send(coletas)
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;