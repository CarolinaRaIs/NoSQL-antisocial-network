const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const thoughtRoutes = require('./thoughts-routes.js');

//Sets the base path for the user-related routes to /users. 
//Therefore, any routes defined in userRoutes will be accessible under /users
router.use('/users', userRoutes);

//sets the base path for the thought-related routes to /thoughts
//Routes defined in thoughtRoutes will be accessible under /thoughts.
router.use('/thoughts', thoughtRoutes);

module.exports = router;