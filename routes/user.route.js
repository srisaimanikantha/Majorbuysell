const express = require('express');
const router = express.Router();

const getUsers = (req, res) => {
    res.json({ message: 'Get all users' });
};

const getUserById = (req, res) => {
    res.json({ message: `Get user with ID ${req.params.id}` });
};

const createUser = (req, res) => {
    res.json({ message: 'Create a new user' });
};

const updateUser = (req, res) => {
    res.json({ message: `Update user with ID ${req.params.id}` });
};

const deleteUser = (req, res) => {
    res.json({ message: `Delete user with ID ${req.params.id}` });
};

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;




