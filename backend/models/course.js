const mongoose = require("mongoose")

const CourseSchema = new mongoose.Schema({

nombre:String,
descripcion:String,

})

module.exports = mongoose.model("Course",CourseSchema)