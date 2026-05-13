const Exercise = require("../models/Exercise");

// Agregar ejercicio
exports.agregarEjercicio = async (req, res) => {
  try {
    const { titulo, enunciado, tipo, opciones, respuesta, contenido } = req.body;
    const ejercicio = new Exercise({ titulo, enunciado, tipo, opciones, respuesta, contenido });
    await ejercicio.save();
    res.json(ejercicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar ejercicio" });
  }
};

// Ver ejercicios por contenido
exports.verEjercicios = async (req, res) => {
  try {
    const ejercicios = await Exercise.find({ contenido: req.params.id });
    res.json(ejercicios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener ejercicios" });
  }
};

// Ver ejercicio por ID
exports.verEjercicioPorId = async (req, res) => {
  try {
    const ejercicio = await Exercise.findById(req.params.id);
    if (!ejercicio) return res.status(404).json({ error: "Ejercicio no encontrado" });
    res.json(ejercicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener ejercicio" });
  }
};

// Editar ejercicio
exports.editarEjercicio = async (req, res) => {
  try {
    const { titulo, enunciado, tipo, opciones, respuesta } = req.body;
    const ejercicio = await Exercise.findByIdAndUpdate(
      req.params.id,
      { titulo, enunciado, tipo, opciones, respuesta },
      { new: true }
    );
    res.json(ejercicio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al editar ejercicio" });
  }
};

// Eliminar ejercicio
exports.eliminarEjercicio = async (req, res) => {
  try {
    await Exercise.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Ejercicio eliminado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar ejercicio" });
  }
};