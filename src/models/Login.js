const mongoose =  require('mongoose');
const bcrypt = require('bcryptjs');
const LoginSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
        select: false,
    },
    
});

LoginSchema.pre("save", async function hashPassword(next){
    if(!this.isModified('senha')) next();

    this.senha = await bcrypt.hash(this.senha,8);
});

LoginSchema.methods = {
    compareHash(hash){
        return bcrypt.compare(hash,this.senha)
    }
}

const Login = mongoose.model('Login', LoginSchema);

module.exports = Login;