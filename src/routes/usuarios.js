module.exports = (app) =>{
    app.get("/usuarios",app.controllers.UsuariosController.listar)
    app.post("/usuarios",app.controllers.UsuariosController.adicionar)
}