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
    },
    // get a user by its id
    getUserById ({params}, res){
        User.findOne({_id: params.id})
        .populate({path: 'Thoughts', select: '__v'})
        .populate({path: 'friends', select: '__v'})
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData){
                res.status(404).json({message: 'no user with this id'});
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    // update a user
    updateUser ({params, body}, res){
        User.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message: 'no user with this id'});
                return;
            }
            res.json(dbUserData)
        })
        .catch (err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    deleteUser ({params}, res){
        User.findOneAndDelete({_id:params.id})
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message: 'no users with this id'});
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
}