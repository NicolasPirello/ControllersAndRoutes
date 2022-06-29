//* En la tura main hay que exportar primeramente estos modulos */

const express = require("express")
const router = express.Router()

//* Luego tenemos que traer el controlador de esta ruta (main.js) */

const mainController = require("../controllers/mainController.js")

// TODO - Creamos las rutas en si, utilizando el objeto creado en el controlador y trayendo su metodo segun la pagina que queramos ir. */

router.get("/", mainController.index)

//! Ahora exportamos Router */
module.exports = router;
