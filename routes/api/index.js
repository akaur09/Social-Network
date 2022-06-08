// require express
const router = require("express").Router();
// require routes
const UserRoutes = require('./UserRoutes');
const ThoughtsRoutes = require('./ThoughtsRoutes');
// add user to beginning of user routes (refer to homework readme)
router.use('./User', UserRoutes);
// add thoughts to beginnign of user routers (refer to homework readme)
router.use('./Thoughts', ThoughtsRoutes);
// export modules
module.exports = router;