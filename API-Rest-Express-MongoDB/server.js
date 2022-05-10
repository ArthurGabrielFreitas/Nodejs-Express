import app from "./src/app.js"

const port = process.env.port || 4321;

app.listen(port, () => {
    console.log(`Server rodando em http://localhost:${port}/`)
})