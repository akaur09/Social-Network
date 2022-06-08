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
    },
    // get all thougths
    getAllThoughts (req, res){
        Thoughts.find({})
        .populate({path: 'reaction', select: '-__v'})
        .select ('-__v')
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
    },
    // get only one thought
    getThoughtsById (req,res) {
        Thoughts.findOne({_id: params.id})
        .populate({path: 'reaction', select: '-__v'})
        .select ('-__v')
        .then(dbThoughtsData => {
            if (!dbThoughtsData){
                res.status(404).json({message: 'no thought with this id'})
                return;
            }
            res.json(dbThoughtsData)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
    },
    // edit thought
    updateThoughts ({params, body}, res){
        Thoughts.findOneAndUpdate({_id: params.id}, body, {new:true, runValidators: true})
        .populate({path: 'reaction', select: '-__v'})
        .select ('-__v')
        .then(dbThoughtsData => {
            if (!dbThoughtsData){
                res.status(404).json({message: 'no thought with this id'})
                return;
            }
            res.json(dbThoughtsData)
        })
        .catch(err => res.json(err));
    },
    // delete thought

    // add a reaction

    // delete a reaction
}
module.exports = ThoughtsController;