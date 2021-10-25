const router = require("express").Router();

const {
  addReactionToThought,
  deleteReaction,
} = require("../../controllers/reaction-controller");

router.route("/").post(addReactionToThought);

// /api/thoughts/:thoughtId/reactions
router.route("/thought/:thoughtId/reaction").delete(deleteReaction);

module.exports = router;
