const bcrypt = require('bcryptjs');

class FuncionarioController {
    constructor(Model) {
        this.FuncionarioModel = Model;
    }

    async save(FuncionarioDTO) {
        try {
            const funcionarioModel = new this.FuncionarioModel(FuncionarioDTO);
            const funcionarioSaved = await funcionarioModel.save();
            return funcionarioSaved;
        } catch (e) {
            throw new Error(e);
        }
    }

    async get() {
        try {
            const funcionarios = await this.FuncionarioModel.find();
            return funcionarios;
        } catch (e) {
            console.error(e);
        }

    }

    async remove(id) {
        try {
            await this.FuncionarioModel.deleteOne({ _id: req.params.id });
            res.sendStatus(204)
        } catch (e) {
            throw new error(e);
        }
    }

    async logar() {
        try {
            const { username, senha } = req.body;
            const user = await this.FuncionarioModel.findOne({ username });
            if (!user) {
                return res.status(400).json({ error: "User not found" });
            }
            if (!(await user.compareHash(senha))) {
                return res.status(400).json({ error: "Invalid password" });
            }
            return res.json({ user })

        } catch (e) {
            throw new error(e);
        }

    }
}

module.exports = FuncionarioController;