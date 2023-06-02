//Define the controller functions for handling user-related operations.
// getUsers,
// getUserById,
// createUser,
// updateUser,
// deleteUserById,
// createFriend,
// deleteFriend,

const { Thoughts, User } = require("../models");

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find({})
                .populate({ path: "thoughts", select: "-__v" })
                .populate({ path: "friends", select: "-__v" })
                .select("-__v");
            res.json(users);
    } catch (err) {
        res.status(500).json(err);
    }
  },

    // Get a single user by ID
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id })
                .populate({ path: "thoughts", select: "-__v" })
                .populate({ path: "friends", select: "-__v" })
                .select("-__v");
            if (!user) {
                res.status(404).json({ message: "No user found!" });
            } else {
                res.json(user);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update a user by ID
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true }
            );
            if (!user) {
                res.status(404).json({ message: "No user found!" });
            } else {
                res.json(user);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a user by ID
    async deleteUserById(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.id });
            if (!user) {
                res.status(404).json({ message: "No user found!" });
            } else {
                await Thoughts.deleteMany({ _id: { $in: user.thoughts } });
                res.json({ message: "User and their thoughts were deleted!" });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create a friend connection
    async createFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            )
                .populate({ path: "friends", select: "-__v" })
                .select("-__v");
            if (!user) {
                res.status(404).json({ message: "No user found!" });
            } else {
                res.json(user);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a friend connection
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            if (!user) {
                res.status(404).json({ message: "No user found!" });
            } else {
                res.json({ message: "Your friend has been removed!" });
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
};
