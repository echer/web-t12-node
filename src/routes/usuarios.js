module.exports = (app) =>{
    app.get("/usuarios",app.controllers.UsuariosController.listar)
    app.post("/usuarios",app.controllers.UsuariosController.adicionar)
    app.get("/usuarios/:id",app.controllers.UsuariosController.consultarPorId)
    app.put("/usuarios/:id",app.controllers.UsuariosController.atualizar)    
    app.delete("/usuarios/:id",app.controllers.UsuariosController.excluir)    
}