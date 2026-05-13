const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  enunciado: { type: String, required: true },
  tipo: { type: String, enum: ["opcion_multiple", "verdadero_falso", "respuesta_corta"], default: "opcion_multiple" },
  opciones: [String], // para opcion multiple
  respuesta: String,  // respuesta correcta
  contenido: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Content",
    required: true
  }
});

module.exports = mongoose.model("Exercise", ExerciseSchema);