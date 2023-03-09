const express = require('express')
const app = express()

const usuariosRoutes = require("./src/usuarios/routes")

app.use('/usuarios', usuariosRoutes)

app.listen(3000, () => {
    console.log("Server is running.")
})