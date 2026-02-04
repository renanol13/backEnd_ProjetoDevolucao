const checkToken = require("../middleware/checkToken");
const ReturnController = require("../controllers/ReturnController");

const router = require("express").Router();

router
  .post("/", checkToken, (req, res) => ReturnController.createReturn(req, res))
  .get("/", checkToken, (req, res) => ReturnController.findReturn(req, res))
  .delete("/:_id", checkToken, (req, res) =>
    ReturnController.deleteReturn(req, res),
  )
  .patch("/:_id", checkToken, (req, res) =>
    ReturnController.editReturn(req, res),
  )

module.exports = router;
