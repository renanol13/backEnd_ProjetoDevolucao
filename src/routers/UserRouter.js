const UserController = require("../controllers/UserController");
const router = require("express").Router();

router.post("/auth/login", (req, res) => UserController.login(req, res));

module.exports = router;
