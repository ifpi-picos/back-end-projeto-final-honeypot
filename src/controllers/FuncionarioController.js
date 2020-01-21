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

    async get(){
        try {
            const funcionarios = await this.FuncionarioModel.find(); 
            return funcionarios;
        }catch(e){
            console.error(e);
        }
       
    }
}

module.exports = FuncionarioController;