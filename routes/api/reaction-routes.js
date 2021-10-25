const router = require("express").Router();

const {
  addReactionToThought,
  deleteReaction,
} = require("../../controllers/reaction-controller");

// /api/thoughts/:thoughtId/reactions
router
  .route("/thought/:thoughtId/reaction")
  .post(addReactionToThought)
  .delete(deleteReaction);

module.exports = router;
