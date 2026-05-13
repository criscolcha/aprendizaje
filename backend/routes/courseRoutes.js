const express = require("express")
const router = express.Router()

const courseController = require("../controllers/courseController")

router.post("/crear", courseController.crearMateria)

router.get("/", courseController.obtenerMaterias)

router.put("/editar/:id", courseController.actualizarMateria)

router.delete("/eliminar/:id", courseController.eliminarMateria)

module.exports = router