const express = require('express');
const router = express.Router();

// Ejemplo de datos de productos (puede ser reemplazado por una base de datos)
let productos = [
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 },
];

// Ruta para obtener todos los productos
router.get('/', (req, res) => {
    res.json(productos);
});

// Ruta para obtener un producto por ID
router.get('/:id', (req, res) => {
    const producto = productos.find(p => p.id === parseInt(req.params.id));
    if (!producto) return res.status(404).send('El producto no fue encontrado.');
    res.json(producto);
});

// Ruta para agregar un nuevo producto
router.post('/', (req, res) => {
    const nuevoProducto = {
        id: productos.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio,
    };
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

module.exports = router;
