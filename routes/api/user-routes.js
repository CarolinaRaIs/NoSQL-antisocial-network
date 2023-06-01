const router = require("express").Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createFriend,
    deleteFriend,
} = require("../../controllers/user.js");

//POST, GET: /users/
//URL: http://localhost:3000/api/users
router.route("/").get(getUsers).post(createUser);

//GET, PUT, DELETE: /users/:id
//URL: http://localhost:3000/api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

//POST, DELETE: /users/:id/friends/:friendsId
//URL: http://localhost:3000/api/users/:id/friends/:friendId
router.route("/:id/friends/:friendId").post(createFriend).delete(deleteFriend);

module.exports = router;
