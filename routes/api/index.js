const router = require("express").Router();
const thoughtsRoutes = require("./thoughts-routes");
const userRoutes = require("./users-routes");
const reactionRoutes = require("./reaction-routes");
const friendRoutes = require("./friend-routes");

router.use("/reaction", reactionRoutes);
router.use("/thought", thoughtsRoutes);
router.use("/user", userRoutes);
router.use("/friend", friendRoutes);
module.exports = router;
