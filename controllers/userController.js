const User = require('../models/User');

const createUser = async (data) => {
    try {
        const user = await User.create(data);
        return user;
    } catch (error) {
        console.error('Error al crear usuario:', error);
        throw error;
    }
};

const getAllUsers = async () => {
    try {
        const users = await User.findAll();
        return users;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        throw error;
    }
};

const updateUser = async (user_id, data) => {
    try {
        const user = await User.update(data, {
            where: { user_id },
        });
        return user;
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        throw error;
    }
};

const deleteUser = async (user_id) => {
    try {
        await User.destroy({
            where: { user_id },
        });
        return true;
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        throw error;
    }
};

module.exports = {
    createUser,
    getAllUsers,
    updateUser,
    deleteUser,
};
