const UserController = require("../controllers/UserController");
const checkToken = require("../middleware/checkToken");
const router = require("express").Router();

router.post("/auth/login", (req, res) => UserController.login(req, res));
router.get("/getselect", checkToken, (req, res) =>
  UserController.findUsersFromSelect(req, res),
);

module.exports = router;
