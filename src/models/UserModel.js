const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  permission: {
    type: String,
    enum: ["admin", "user"],
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
