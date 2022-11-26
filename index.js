//const { Person } = require("./person")
const dotenv = require('dotenv')
const connectDatabase = require('./src/database/connect')

dotenv.config()
connectDatabase()

//require("./modules/http")
require("./modules/express")
//const person = new Person('Luis')


