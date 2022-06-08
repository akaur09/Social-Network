// require express
const router = require('express').Router();
// reqquires controller components
const {
    getAllThoughts,
    getThoughtsById,
    createThoughts,
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require ('../../controllers/ThoughtsController');
// call routes for thoughts
router.route('/').get(getAllThoughts);
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts);
router.route('/:userId').post(createThoughts);

// call routes for reactions
router.route('/:ThoughtsId/reaction').post(addReaction);
// call routes for deleting a reaction
router.route('/:ThoughtsId/reaction/reactionId').delete(deleteReaction);

module.exports =router;