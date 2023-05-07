const database = require('../models')

class TurmaController {

    static async pegaTodasAsTurmas(req, res) {
      try {
        const todasAsTurmas = await database.Turmas.findAll()
        return res.status(200).json(todasAsTurmas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

    static async pegaUmaTurma(req, res){
        const { id } = req.params
        try {
            const umaTurma = await database.Turmas.findOne({where: {id: Number(id)}})
            return res.status(200).json(umaTurma)
        } catch (err) {
            return res.status(500).json({Error: err.message})
        }
    }

    static async criaTurma(req,res) {
        const novaTurma = req.body
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
        } catch (err) {
            return res.status(500).json({Error: err.message})
        }
    }

    static async atualizaTurma(req,res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Turmas.update(novasInfos, {where: {id: Number(id)}})
            const turmaAtualizada = await database.Turmas.findOne({where: {id: Number(id)}})
            return res.status(200).json(turmaAtualizada)
        } catch (err) {
            return res.status(500).json({Error: err.message})
        }
    }

    static async apagaTurma(req,res){
        const { id } = req.params
        try {
            await database.Turmas.destroy({
                where: { id: Number(id)}
            })
            return res.status(200).json({Message: "Registro deletado com sucesso"})
        } catch (err) {
            return res.status(500).json({Error: err.message})
        }
    }
}

module.exports = TurmaController