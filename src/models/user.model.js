const mooongose = require('mongoose')

const userSchema = new mooongose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
    },
})

const UserModel = mooongose.model('User', userSchema)

module.exports = UserModel;