
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const contentRoutes = require("./routes/contentRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// RUTAS
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/exercises", exerciseRoutes); // ✅ antes de static

// FRONTEND
app.use(express.static(path.join(__dirname,"../frontend")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"../frontend/index.html"));
});

const PORT = 3000;
app.listen(PORT, ()=>console.log("Servidor corriendo en:"+PORT));