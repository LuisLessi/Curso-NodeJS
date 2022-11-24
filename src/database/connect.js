const mongoose = require('mongoose')

const connectToDataBase = async () => {
    await mongoose.connect(`mongodb+srv:${}@nodejs-curso.00w94mb.mongodb.net/?retryWrites=true&w=majority`, (error) => {
        if (error) {
            return console.log('Errro ao se conectar ao database:', error)
        } else {
            return console.log('Conexão realizada com sucesso com database !')

        }
    })
}

module.exports = connectToDataBase