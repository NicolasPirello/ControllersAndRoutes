//* Los modulos que debemos traernos para empezar */

const express = require("express")
const app = express()
const path = require("path")

//* Crear la ruta de recursos Estaticos */

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

//* Requerimos las rutas */

const mainRoutes = require("./src/routes/main")

//* Con el metodo use de express, usamos las rutas */

app.use("/", mainRoutes);

//* Levantamos el servidor */

app.listen(3000, () => {
    console.log("Todo Funcionando")
})

