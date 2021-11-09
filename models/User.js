const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let userSchema = new Schema(
  {
    fullname: String,
    email: String,
    password: String,
    avatarSmall: String,
    avatar: String,
  },
  { timestamps: true }
);

module.exports = {
  User: model("user", userSchema),
};
