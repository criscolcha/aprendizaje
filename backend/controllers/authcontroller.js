const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);

    const user = new User({
      nombre,
      email,
      password: hash,
      rol
    });

    await user.save();

    res.json({ msg: "Usuario creado" });
  } catch (err) {
    console.error("Error al registrar:", err);
    res.status(500).json({ msg: "Error al registrar usuario", error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ msg: "Usuario no existe" });
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return res.status(400).json({ msg: "Contraseña incorrecta" });
  }

  res.json({
    token: "token",
    rol: user.rol
  });
};