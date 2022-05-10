import mongoose from "mongoose"

const editoraSchema = new mongoose.Schema(
    {
        id: { type: String },
        rpgs: { type: mongoose.Schema.Types.ObjectId, ref: "rpgs" },
        nome: { type: String, required: true },
        fundacao: { type: Date }
    },
    {
        versionKey: false
    }
)

const editoras = mongoose.model("editoras", editoraSchema)

export default editoras