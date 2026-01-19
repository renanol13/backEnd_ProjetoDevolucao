const router = require("express").Router();

const userRouter = require("./UserRouter");
router.use("/", userRouter);

const returnRouter = require("./ReturnRouter");
router.use("/return", returnRouter);

module.exports = router;
