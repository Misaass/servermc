const express = require('express');
const path = require('path');

const app = express();
const port = 80;

// Configura Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Inicia el servidor en el puerto 80
app.listen(port, () => {
  console.log(`Servidor Express en el puerto ${port}`);
});