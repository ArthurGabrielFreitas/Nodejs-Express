import rpgs from "../models/Rpg.js"

class RpgController {
    static listarRpgs = (req, res) => {
        rpgs.find()
            .populate("editora")
            .exec((err, rpgs) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Falha ao obter RPGs.` })
                } else {
                    res.status(200).json(rpgs)
                }
            })
    }

    static listarRpgPorId = (req, res) => {
        const { id } = req.params

        rpgs.findById(id)
            .populate("editora", "nome")
            .exec((err, rpg) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Id do RPG não localizado.` })
                } else {
                    res.status(200).send(rpg)
                }
            })
    }

    static listarRpgPorEditora = (req, res) => {
        const { tema } = req.query

        rpgs.find({ "tema": { $regex: tema, $options: 'i' } }, {})
        .populate("editora", "nome")
        .exec((err, rpgs) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Falha ao obter RPGs pelo tema ${tema}.` })
            } else {
                res.status(200).send(rpgs)
            }
        })
    }

    static cadastrarRpg = (req, res) => {
        let rpg = new rpgs(req.body)

        rpg.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar RPG.` })
            } else {
                res.status(201).send(rpg.toJSON())
            }
        })
    }

    static atualizarRpg = (req, res) => {
        const { id } = req.params

        rpgs.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao atualizar RPG.` })
            } else {
                res.status(200).send({ message: "RPG atualizado com sucesso!" })
            }
        })
    }

    static excluirRpg = (req, res) => {
        const { id } = req.params

        rpgs.findByIdAndDelete(id, (err) => {
            if (err) {
                res.send(500).send({ message: `${err.message} - Falha ao excluir RPG.` })
            } else {
                res.status(200).send({ message: "RPG removido com sucesso!" })
            }
        })
    }
}

export default RpgController