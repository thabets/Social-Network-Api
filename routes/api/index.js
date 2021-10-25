const router = require("express").Router();
const thoughtsRoutes = require("./thoughts-routes");
const userRoutes = require("./users-routes");
const reactionRoutes = require("./reaction-routes");

router.use("/Reaction", reactionRoutes);
router.use("/Thought", thoughtsRoutes);
router.use("/User", userRoutes);

module.exports = router;
