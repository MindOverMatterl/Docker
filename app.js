const express = require('express');
const app = express();
const port = 3000;

// Middleware para manejar solicitudes JSON
app.use(express.json());

// Importar rutas
const clientesRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');

// Usar las rutas
app.use('/clientes', clientesRoutes);
app.use('/productos', productosRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
