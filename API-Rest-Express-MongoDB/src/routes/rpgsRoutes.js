import express from "express"
import RpgController from "../controllers/rpgsController.js"

const router = express.Router()

router
    .get("/rpgs", RpgController.listarRpgs)
    .get("/rpgs/busca", RpgController.listarRpgPorEditora)
    .get("/rpgs/:id", RpgController.listarRpgPorId)
    .post("/rpgs", RpgController.cadastrarRpg)
    .put("/rpgs/:id", RpgController.atualizarRpg)
    .delete("/rpgs/:id", RpgController.excluirRpg)

export default router