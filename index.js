const express = require("express");

const app = express();
app.use(express.json());

// Datos de ejemplo
let usuarios = [
  { id: 1, nombre: "Juan Perez", email: "juan@example.com" },
  { id: 2, nombre: "Ana Gomez", email: "ana@example.com" },
];

// Rutas
app.get("/api/usuarios", (req, res) => {
  res.json(usuarios);
});

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});



