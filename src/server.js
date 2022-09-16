const express = require("express")
const server = express()

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar pasta public
server.use(express.static("public"))
//ligar o servidor
server.listen(3000)

//configurar caminhos da aplicação
//pagina inicial
server.get("/", (req, res) => {
    return res.render("index.html")
})

