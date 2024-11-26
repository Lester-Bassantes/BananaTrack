const express = require('express');
const { createUser, getAllUsers, updateUser, deleteUser } = require('../controllers/userController');
const User = require('../models/User');
const router = express.Router();

// Crear usuario
router.post('/users', async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener usuarios
router.get('/users', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar usuario
router.put('/users/:id', async (req, res) => {
    try {
        const updated = await updateUser(req.params.id, req.body);
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Eliminar usuario
router.delete('/users/:id', async (req, res) => {
    try {
        await deleteUser(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Comprobar usuario
router.post('/login', async (req, res) => {
    const { txtNombreUsuario, txtContrasena } = req.body;
    try {
        let user = await User.findOne({ where: { user_username, user_password } });

        if (!user) {
            return res.redirect('login');
        }

        return res.redirect('main');

    } catch (error) {
        res.redirect('login');
    }
});

module.exports = router;
