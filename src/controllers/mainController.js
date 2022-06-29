
//* Se requiere path para poder generar la ruta con path.resolve */

const path = require("path")

//* Se crea el controlador que es un objeto literal y dentro de el se crea el (req,res) para responder, aca se usa el metodo resolve de path */

const mainController = {

    index: (_req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/home.html"))
    },

}

//* Se exporta para poder ser utilizado en app.js */

module.exports = mainController;


