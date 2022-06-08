// require response from express
const res = require('express/lib/response');
// require users
const {User} = require('../models');
// create funcution for user
const UserController = {
    // create user
    createUser ({body}, res) {
        User.create(body)
        .then(dbUserData => res.join(dbUserData))
        .catch(err => res.status (400).json(err))
    },
    // get users
    getAllUsers (req, res) {
        User.find({})
        .populate({path: 'Thoughts', select: '__v'})
        .populate({path: 'friends', select: '__v'})
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    }
}