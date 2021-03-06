module.exports = (app) =>{
    app.get("/produtos",app.controllers.ProdutosController.listar)
    app.post("/produtos",app.controllers.ProdutosController.adicionar)    
    app.get("/produtos/:id",app.controllers.ProdutosController.consultarPorId)
    app.put("/produtos/:id",app.controllers.ProdutosController.atualizar)    
    app.delete("/produtos/:id",app.controllers.ProdutosController.excluir)    
}