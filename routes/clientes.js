const express = require('express');
const router = express.Router();

// Ejemplo de datos de clientes (puede ser reemplazado por una base de datos)
let clientes = [
    { id: 1, nombre: 'Cliente 1', email: 'cliente1@example.com' },
    { id: 2, nombre: 'Cliente 2', email: 'cliente2@example.com' },
];

// Ruta para obtener todos los clientes
router.get('/', (req, res) => {
    res.json(clientes);
});

// Ruta para obtener un cliente por ID
router.get('/:id', (req, res) => {
    const cliente = clientes.find(c => c.id === parseInt(req.params.id));
    if (!cliente) return res.status(404).send('El cliente no fue encontrado.');
    res.json(cliente);
});

// Ruta para agregar un nuevo cliente
router.post('/', (req, res) => {
    const nuevoCliente = {
        id: clientes.length + 1,
        nombre: req.body.nombre,
        email: req.body.email,
    };
    clientes.push(nuevoCliente);
    res.status(201).json(nuevoCliente);
});

module.exports = router;
