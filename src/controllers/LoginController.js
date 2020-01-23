class LoginController {
    constructor(model) {
        this.funcionario = model;
        
    }

    async logar(req, res) {
        const body = req.body;
        const funcionario = await this.funcionario.findOne({ username: body.username });
        if (funcionario.senha === body.senha) {
            return res.send(400);
        } else{
            return res.send(401);
        }
    }
}