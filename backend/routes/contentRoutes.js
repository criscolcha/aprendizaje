const express = require("express")
const router = express.Router()

const contentController = require("../controllers/contentController")

router.post("/agregar",contentController.agregarContenido)

router.get("/:id",contentController.verContenido)

module.exports = router