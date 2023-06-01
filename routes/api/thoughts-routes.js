const router = require("express").Router();

const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughts.js");

//GET: /thoughts
//URL: http://localhost:3000/api/thoughts
router.route("/").get(getThoughts);

//GET: /thoughts/:id
//URL: http://localhost:3000/api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

//POST: /thoughts/:userID
//URL: http://localhost:3000/api/thoughts/:userId
router.route("/:userId").post(createThought);

//POST: /thoughts/:id/reactions
//URL: http://localhost:3000/api/thoughts/:id/reactions
router.route("/:id/reactions").post(addReaction);

//DELETE: /thoughts/:thoughtId/reactions/:reactionsId
//URL: http://localhost:3000/api/thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;