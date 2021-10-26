const router = require("express").Router();
const thoughtsRoutes = require("./thoughts-routes");
const userRoutes = require("./users-routes");
const reactionRoutes = require("./reaction-routes");

router.use("/reaction", reactionRoutes);
router.use("/thought", thoughtsRoutes);
router.use("/user", userRoutes);

module.exports = router;
