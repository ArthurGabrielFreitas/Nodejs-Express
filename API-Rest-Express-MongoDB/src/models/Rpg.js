import mongoose from "mongoose"

const rpgSchema = new mongoose.Schema(
    {
        id: { type: String },
        editora: { type: mongoose.Schema.Types.ObjectId, ref: "editoras", required: true },
        lancamento: { type: Date },
        tema: { type: String },
        titulo: { type: String, required: true }
    },
    {
        versionKey: false
    }
)

const rpgs = mongoose.model('rpgs', rpgSchema)

export default rpgs