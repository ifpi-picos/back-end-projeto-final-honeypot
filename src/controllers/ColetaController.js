class ColetaController {
    constructor(Model) {
        this.ColetaController = Model;
    }

    async save(ColetaDTO) {
        try {
            const coletaModel = new this.ColetaController(ColetaDTO);
            const coletaSaved = await coletaModel.save();
            return coletaSaved;
        } catch (e) {
            throw new Error(e);
        }
    }

    async get(){
        console.log("controller")
        try {
            const coletas = await this.ColetaController.find(); 
            return coletas;
        }catch(e){
            console.error(e);
        }
       
    }
}

module.exports = ColetaController;