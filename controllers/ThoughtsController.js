// require models
const {Thoughts, User} = require('../models');
// create a function for creating thoughts
const ThoughtsController = {
    // create thoughts
    createThoughts({params, body}, res){
        Thoughts.create(body)
        .then (({_id}) => {
            return User.findOneAndUpdate({_id: params.userId}, {$push: {thoughts: _id}}, {new: true});
        })
        .then (dbThoughtsData => {
            if (!dbThoughtsData) {
                res.status(404).json({message:'no thought with this id'})
                return;
            }
            res.json(dbThoughtsData)
        })
        .catch (err => res.json(err));
    }
    // get all thougths
    // get only one thought
    // edit thought
    // delete thought
    // add a reaction
    // delete a reaction
}
module.exports = ThoughtsController;