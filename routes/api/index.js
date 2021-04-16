const router = require("express").Router();
const usersRoutes = require("./users");
const welcome = require("./welcome");
const usersController = require("../../controllers/usersController");

// Post routes
router.use("/users", usersRoutes);
router.use("/welcome", welcome);
// router.route("/checkUser2/:_id/:username").post(".//");

module.exports = router;
