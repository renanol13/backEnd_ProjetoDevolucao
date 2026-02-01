const mongoose = require("mongoose");

const ReturnShema = mongoose.Schema({
  item: {
    type: String,
    require: true,
  },
  technical: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  client: {
    type: String,
    require: true,
  },
  code_OS: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    require: true,
  },
  amount: {
    type: String,
    require: true,
  },
  is_inventory: {
    type: Boolean,
    require: true,
  },
  pendding: {
    type: Boolean,
    require: true,
  },
});

const ReturnModel = mongoose.model("Return", ReturnShema);

module.exports = ReturnModel;
