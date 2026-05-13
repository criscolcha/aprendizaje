const Content = require("../models/Content");
const mongoose = require("mongoose"); // 👈 FALTABA ESTO

exports.agregarContenido = async (req, res) => {
  try {
    const { titulo, tipo, url, curso, unidad } = req.body;

    const content = new Content({
      titulo,
      tipo,
      url,
      curso,
      unidad
    });

    await content.save();

    res.json(content);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al agregar contenido" });
  }
};

// VER CONTENIDO POR CURSO
exports.verContenido = async (req, res) => {
  try {

    const id = req.params.id;

    console.log("ID recibido:", id);

    // ✅ VALIDAR ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const contenido = await Content.find({
      curso: id
    }).sort({ unidad: 1 });

    console.log("Contenido encontrado:", contenido);

    res.json(contenido);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener contenido" });
  }
};