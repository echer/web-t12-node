const { json } = require("body-parser")

module.exports = function(app){

    return {
        listar: (req, res)=>{
            res.json(app.db.produtosDB)
        },

        adicionar: (req, res)=>{
            try{
                let produto = req.body
                app.db.produtosDB.push(produto)
                res.json({status:200,message:"sucesso"})
            }catch(error){
                res.status(500).json({status:500,message:error})
            }
        },

        consultarPorId: (req, res)=>{
            let id = req.params.id
            let produto = app.db.produtosDB.filter((item)=>{
                return id == item.id
            })
            res.json(produto)
        },

        atualizar: (req,res)=>{
            let id = req.params.id
            let produto = req.body
            let index = app.db.produtosDB.findIndex((item)=>id == item.id)
            app.db.produtosDB[index] = produto
            res.json({status:200,message:"sucesso"})
        },

        excluir: (req,res)=>{
            let id = req.params.id
            app.db.produtosDB = app.db.produtosDB.filter((item)=>id != item.id)
            res.json({status:200,message:"sucesso"})
        }
    }

}