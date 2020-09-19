const produtos = require("./src/controllers/ProdutosController")
const usuarios = require("./src/controllers/UsuariosController")
const express = require("express")
const consign = require("consign")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

consign({cwd:'src'})
    .include("db")
    .include("controllers")
    .include("routes")
    .into(app)

app.listen(8000,function(){
    console.log("Servidor rodando na porta 8000")
})