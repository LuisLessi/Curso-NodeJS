const express = require('express');
const app = express();
const port = 8080;


app.get('/home', (req, res) => {
    res.contentType('application/html')
    res.status(200).send('<h1>Hello express</h1>')
})
app.listen(port, () => console.log(`Rodando na porta ${port} !`));