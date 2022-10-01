const express = require("express")
const server = express()

//configurar pasta public
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//ligar o servidor
server.listen(process.env.PORT || 3000)

//configurar caminhos da aplicação
//pagina inicial
server.get("/", (req, res) => {
    return res.render("cadastro.html")
})

server.get("/cadastro", (req, res) => {
    return res.render("cadastro.html")
})
server.get("/login", (req, res) => {
    return res.render("login.html")
})
server.get("/index", (req, res) => {
    return res.render("index.html")
})