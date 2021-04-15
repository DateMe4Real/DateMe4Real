const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/userCheck/:uuid/:username").get(usersController.userCheck);

router.route("/userCheck2/:_id/:username").get(usersController.userCheck2);

module.exports = router;
