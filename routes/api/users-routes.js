const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller.js");

// /api/user
router.route("/").get(getAllUsers).post(createUser);

// api/user/:userId
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
