import express from "express"
import rpgs from "../routes/rpgsRoutes.js"
import editoras from "../routes/editorasRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Lista de RPGs")
    })

    app.use(
        express.json(),
        rpgs,
        editoras
    )
}

export default routes