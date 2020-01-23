const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const LoginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
        select: false,
    },

});

LoginSchema.pre("save", async function hashPassword(next) {
    if (!this.isModified('senha')) next();

    this.senha = await bcrypt.hash(this.senha, 8);
});

LoginSchema.methods = {
    compareHash(hash) {
        return bcrypt.compare(hash, this.senha)
    },
    generateToken() {
        return jwt.sign({ id: this.id }, "secret", {
            expiresIn: 86400
        });
    }
}

const Login = mongoose.model('Login', LoginSchema);

module.exports = Login;