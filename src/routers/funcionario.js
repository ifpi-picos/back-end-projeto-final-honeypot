const express = require("express");
const FunController = require("../controllers/FuncionarioController");
const Funcionario = require("../models/Funcionario");
const funController = new FunController(Funcionario);

const router = express.Router();

router.post("/", async (req, res) => {
    console.log(req.body)
    try {
        const funDTO = req.body;
        const funcionarioSaved = await funController.save(funDTO);
        
        res.status(201).json(funcionarioSaved);
    } catch (e) {
        console.error(e);
        res.status(400).send(error.message);
    }
});

router.get("/", async (req, res) => {
    try {
        console.log('route')
        const funcionarios = await funController.get();
        res.send(funcionarios)
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/:id', async (req, res) => {
    try {
      await funController.remove(req.params.id);
      res.send(message.success.removeFuncionario);
    } catch (err) {
      res.status(400).send(err);
    }
  });
router.post("/logar", async(req,res) =>{
   try {
    const { email, senha } = req.body;
    const d = await funController.logar(email, senha)
        res.status(200).send(d);
   } catch (err) {
       res.status(400).send(err);
   }
});

module.exports = router;