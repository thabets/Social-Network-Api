const router = require("express").Router();

const {
  addReactionToThought,
  deleteReaction,
} = require("../../controllers/reaction-controller");
// http:localhost:3001/api/reaction/:thoughtId
router.route("/:thoughtId").post(addReactionToThought);

// /api/reaction/:thoughtId/:reactionId
router.route("/:thoughtId/:reactionId").delete(deleteReaction);

module.exports = router;
