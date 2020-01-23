class LoginController {
    constructor(model) {
        this.funcionario = model;
        
    }
    async logar(req, res) {
        try {
            const body =  req.body;
            const funcionario = await this.funcionario.findOne({username: body.username});
            if(funcionario.senha === body.senha){
                 console.log('Usuario cadastrado')
            };
        } catch (error) {
            
        }
    }
}

module.exports =  LoginController;