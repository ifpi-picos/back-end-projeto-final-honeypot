class ApiarioController {
    constructor(Model) {
        this.ApiarioModel = Model;
    }

    async save(ApiarioDTO) {
        try {
            const apiarioModel = new this.ApiarioModel(ApiarioDTO);
            const apiarioSaved = await apiarioModel.save();
            return apiarioSaved;
        } catch (e) {
            throw new Error(e);
        }
    }

    async get(){
        console.log("controller")
        try {
            const apiarios = await this.ApiarioModel.find(); 
            return apiarios;
        }catch(e){
            console.error(e);
        }
       
    }
}

module.exports = ApiarioController;