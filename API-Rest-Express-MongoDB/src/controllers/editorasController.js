import editoras from "../models/Editora.js"

class EditoraController {
    static listarEditoras = (req, res) => {
        editoras.find()
            .populate("rpgs", "titulo")
            .exec((err, editoras) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Falha ao obter Editoras.` })
                } else {
                    res.status(200).json(editoras)
                }
            })
    }

    static listarEditoraPorId = (req, res) => {
        const { id } = req.params

        editoras.findById(id)
            .populate("rpgs", "titulo")
            .exec((err, editora) => {
                if (err) {
                    res.status(400).send({ message: `${err.message} - Id da Editora não localizado.` })
                } else {
                    res.status(200).send(editora)
                }
            })
    }

    static cadastrarEditora = (req, res) => {
        let editora = new editoras(req.body)

        editora.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar Editora.` })
            } else {
                res.status(201).send(editora.toJSON())
            }
        })
    }

    static atualizarEditora = (req, res) => {
        const { id } = req.params

        editoras.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao atualizar editora.` })
            } else {
                res.status(200).send({ message: "Editora atualizada com sucesso!" })
            }
        })
    }

    static excluirEditora = (req, res) => {
        const { id } = req.params

        editoras.findByIdAndDelete(id, (err) => {
            if (err) {
                res.send(500).send({ message: `${err.message} - Falha ao excluir Editora.` })
            } else {
                res.status(200).send({ message: "Editora removida com sucesso!" })
            }
        })
    }
}

export default EditoraController