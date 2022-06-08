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
router.route('/:thoughtsId/reactions').post(addReaction);
// call routes for deleting a reaction
router.route('/:thoughtsId/reactions/reactionId').delete(deleteReaction);

module.exports =router;