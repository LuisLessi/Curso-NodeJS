const express = require('express')
const UserModel = require('../src/models/user.model')
const ejs = require("ejs")

const app = express()

app.set('view engine', 'ejs')
app.set("views", "src/views")

app.get('/views/users', async (req, res) => {
    try {
        res.render("index");
    } catch (error) {

    }
})

app.use((req, res, next) => {
    console.log(`Request type: ${req.method}`)
    console.log(`Content type: ${req.headers["content-type"]}`)
    console.log(`Date: ${new Date()}`)


    next()
})

app.use(express.json())

app.get('/home', (req, res) => {
    res.type(".html")
    res.status(200).send("<h1>hello Express</h1>")
});

app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({})
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).send("Erro:" + error.message)
    }
});

app.post("/users", async (req, res) => {
    try {
        const user = await UserModel.create(req.body)

        res.status(201).json(user)
    } catch (error) {
        res.status(500).send("Erro:" + error.message)
    }
})

app.patch("/users/:id", async (req, res) => {
    try {

        const id = req.params.id
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })

        res.status(201).json(user)
    } catch (error) {
        res.status(500).send("Erro:" + error.message)
    }
})


app.delete("/users/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await UserModel.findByIdAndDelete(id)

        res.status(201).json(user)
    } catch (error) {
        res.status(500).send("Erro:" + error.message)
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id

        const user = await UserModel.findById(id)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).send("Erro:" + error.message)

    }
})

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`))