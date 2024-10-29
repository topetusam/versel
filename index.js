// index.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Datos de ejemplo
let usuarios = [
  { id: 1, nombre: "Juan Perez", email: "juan@example.com" },
  { id: 2, nombre: "Ana Gomez", email: "ana@example.com" },
];

// Rutas

// Obtener todos los usuarios
app.get("/api/usuarios", (req, res) => {
  res.json(usuarios);
});

// Obtener un usuario por ID
app.get("/api/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (usuario) res.json(usuario);
  else res.status(404).json({ mensaje: "Usuario no encontrado" });
});

// Crear un nuevo usuario
app.post("/api/usuarios", (req, res) => {
  const nuevoUsuario = { id: usuarios.length + 1, ...req.body };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// Actualizar un usuario por ID
app.put("/api/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((u) => u.id === parseInt(req.params.id));
  if (usuario) {
    Object.assign(usuario, req.body);
    res.json(usuario);
  } else res.status(404).json({ mensaje: "Usuario no encontrado" });
});

// Eliminar un usuario por ID
app.delete("/api/usuarios/:id", (req, res) => {
  const index = usuarios.findIndex((u) => u.id === parseInt(req.params.id));
  if (index !== -1) {
    usuarios.splice(index, 1);
    res.status(204).end();
  } else res.status(404).json({ mensaje: "Usuario no encontrado" });
});

// Puerto de escucha (necesario para Vercel)
app.listen(3000, () => {
  console.log("Servidor en ejecución en el puerto 3000");
});

module.exports = app;