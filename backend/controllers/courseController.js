const Course = require("../models/course")

// Crear materia
exports.crearMateria = async (req, res) => {

const { nombre, descripcion } = req.body

const course = new Course({
nombre,
descripcion
})

await course.save()

res.json(course)

}

// Obtener todas las materias
exports.obtenerMaterias = async (req, res) => {

const courses = await Course.find()

res.json(courses)

}

// Actualizar materia
exports.actualizarMateria = async (req, res) => {

const { id } = req.params
const { nombre, descripcion } = req.body

const course = await Course.findByIdAndUpdate(
id,
{ nombre, descripcion },
{ new: true }
)

res.json(course)

}

// Eliminar materia
exports.eliminarMateria = async (req, res) => {

const { id } = req.params

await Course.findByIdAndDelete(id)

res.json({ mensaje: "Materia eliminada" })

}