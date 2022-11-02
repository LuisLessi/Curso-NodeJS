const path = require('path')

//Exibe o nome do arquivo atual
console.log(path.basename(__filename))

//Exibe o nome do diretorio atual
console.log(path.dirname(__filename))

//Exibe a extensão do aquivo atual (Ex: .Js, .html, .css etc)
console.log(path.extname(__filename))

//Exibe um objeto de informações Path do arquivo atual
console.log(path.parse(__filename))

//Criar arquivos e diretorios noo diretorio atual
console.log(path.join(__dirname, "test", "teste.html"))