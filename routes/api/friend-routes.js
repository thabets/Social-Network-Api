const router = require("express").Router();

const {
  addFriendToUser,
  deleteFriend,
} = require("../../controllers/friend-controller");

// /api/friend/:userId
router.route("/:userId").post(addFriendToUser);

// /api/friend/:userId/:friendId
router.route("/:userId/:friendId").delete(deleteFriend);

module.exports = router;
