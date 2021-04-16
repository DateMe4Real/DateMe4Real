const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/userCheck/:uuid/:username").post(usersController.userCheck);

router.route("/userCheck2/:_id/:username").post(usersController.userCheck2);

module.exports = router;
