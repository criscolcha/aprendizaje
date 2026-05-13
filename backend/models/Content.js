const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({

  titulo: String,

  tipo: {
    type: String,
    enum: ["link", "pdf", "video", "libro"]
  },

  url: String,

 unidad: {
  type: String,
  enum: Array.from({ length: 10 }, (_, i) => `Unidad ${i + 1}`),
  required: true
},

  curso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }

});

module.exports = mongoose.model("Content", ContentSchema);