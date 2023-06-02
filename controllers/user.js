//Define the controller functions for handling user-related operations.
// getUsers,
// getUserById,
// createUser,
// updateUser,
// deleteUser,
// createFriend,
// deleteFriend,

const { Thoughts, User } = require("../models");

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

  // Get a single user by ID
  getUserById(req, res) {
    User.findOne({ _id: req.params.id })
      .populate({ path: "thoughts", select: "-__v" })
      .populate({ path: "friends", select: "-__v" })
      .select("-__v")
      .then((user) =>
        //checks if a user is found or not:
        //If a user is not found (!user evaluates to true), it sends a 404 HTTP response with a JSON object containing the error message "No user found!". 
        //Otherwise, it sends a JSON response with the found user object.
        !user
          ? res.status(404).json({ message: "No user found!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // Update a user by ID
  updateUser(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a user by ID
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.id })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found!" })
          : Thoughts.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() =>
        res.json({ message: "User and their thoughts were deleted!" })
      )
      .catch((err) => res.json(err));
  },

  // Create a friend connection
  createFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .populate({ path: "friends", select: "-__v" })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a friend connection
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found!" })
          : res.json({ message: "Your friend has been removed!" })
      )
      .catch((err) => res.status(500).json(err));
  },
};
