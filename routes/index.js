const router = require("express").Router();
//apiRoutes = used to import and assign the routes from the api directory.
const apiRoutes = require("./api");

//any request that starts with "/api" will be passed to the apiRoutes middleware for further handling.
router.use("/api", apiRoutes);

// Middleware to handle 404 errors
router.use((req, res) => {
    res.status(404).send("404 Error");
});

//router object is exported to be used by other parts of the application.
module.exports = router;