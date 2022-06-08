// require express
const router = require('express').Router();
// requuire users controller
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require ('../../controllers/UserController');
// call routes for creating user

// call route for updating user

// call route for friends