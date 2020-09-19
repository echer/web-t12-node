module.exports = function(app){
    
    return {
        listar: (req, res)=>{
            res.json(app.db.usuariosDB)
        },
        
        adicionar: (req, res)=>{
            try{
                let usuario = req.body
                app.db.usuariosDB.push(usuario)
                res.json({"status":200,"message":"sucesso"})
            }catch(error){
                res.status(500).json({"status":500,"message":error})
            }
        }
    }
}