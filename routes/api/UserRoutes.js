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
router.route('/').get(getAllUsers).post(createUser);
// call route for updating user
router.route ('/:id').get(getUserById).put(updateUser).delete(deleteFriend);
// call route for friends
router.route('/:id:friends').post(addFriend).delete(deleteFriend);

module.exports = router;