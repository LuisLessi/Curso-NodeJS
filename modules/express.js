const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.type(".html")
    res.status(200).send("<h1>hello Express</h1>")
});

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'Manuela Elisa',
            email: 'manu@hotmail.com'
        },
        {
            name: 'Jenifer Rita',
            email: 'jeni@hotmail.com'
        }
    ];
    res.status(200).json(users)
});

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`))