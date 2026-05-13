const express = require("express");
const router = express.Router();
const exerciseController = require("../controllers/exerciseController");

// Rutas de ejercicios
router.post("/agregar", exerciseController.agregarEjercicio);
router.get("/:id", exerciseController.verEjercicios);
router.get("/ver/:id", exerciseController.verEjercicioPorId); // para editar
router.put("/editar/:id", exerciseController.editarEjercicio);
router.delete("/eliminar/:id", exerciseController.eliminarEjercicio);

module.exports = router;