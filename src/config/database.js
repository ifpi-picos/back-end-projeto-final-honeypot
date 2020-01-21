const mongoose = require('mongoose');

module.exports = function () {
    return mongoose.connect(
        'mongodb://localhost:27017/dadsa',
        { useNewUrlParser: true }, () => {
            console.log("Banco Conectado !!!!")
        }

    )
}

