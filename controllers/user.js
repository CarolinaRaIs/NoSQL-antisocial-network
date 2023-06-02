//Define the controller functions for handling user-related operations.
const { User, Thought } = require("../models");

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find({})
            .populate({ path: "thoughts", select: "-__v" })
            .populate({ path: "friends", select: "-__v" })
            .select("-__v")
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },