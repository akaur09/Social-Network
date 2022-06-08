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
    }
}