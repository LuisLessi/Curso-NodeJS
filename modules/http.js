const http = require('http')

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { "Content-Type": "text/html" });
        return res.end("<h1>Home page</h1>");
    }
    if (req.url === '/users') {
        const users = [
            {
                name: 'Manuela Elisa',
                email: 'manu@hotmail.com'
            },
            {
                name: 'Jenifer Rita',
                email: 'jeni@hotmail.com'
            }
        ]
        res.writeHead(200, { "Content-type": "application/json" })
        return res.end(JSON.stringify(users))

    }
})

server.listen(port, () => console.log(`Rodando na porta ${port} !`));