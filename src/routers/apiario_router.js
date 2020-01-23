const express = require("express");
const ApiarioController = require("../controllers/ApiarioController");
const Apiario = require("../models/Apiario");
const apiarioController = new ApiarioController(Apiario);

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const funDTO = req.body;
        const apiarioSaved = await apiarioController.save(funDTO);
        res.send(apiarioSaved);
    } catch (e) {
        console.error(e);
        res.status(400).send(error.message);
    }
});

router.get("/", async (req, res) => {
    try {
        console.log('route')
        const apiarios = await apiarioController.get();
        res.send(apiarios)
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;