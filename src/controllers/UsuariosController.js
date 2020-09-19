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
        },
        
        consultarPorId: (req, res)=>{
            let id = req.params.id
            let usuario = app.db.usuariosDB.filter((item)=>{
                return id == item.id
            })
            res.json(usuario)
        },

        atualizar: (req,res)=>{
            let id = req.params.id
            let usuario = req.body
            let index = app.db.usuariosDB.findIndex((item)=>id == item.id)
            app.db.usuariosDB[index] = usuario
            res.json({status:200,message:"sucesso"})
        },

        excluir: (req,res)=>{
            let id = req.params.id
            app.db.usuariosDB = app.db.usuariosDB.filter((item)=>id != item.id)
            res.json({status:200,message:"sucesso"})
        }
    }
}