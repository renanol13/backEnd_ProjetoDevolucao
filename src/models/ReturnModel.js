const mongoose = require("mongoose");

const ReturnShema = mongoose.Schema({
  item: {
    type: String,
    require: true,
  },
  technical: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
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
  },
  pendding: {
    type: Boolean,
  },
});

const UserModel =  mongoose.model("Return", ReturnShema)

module.exports = UserModel