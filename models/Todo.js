const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let todoSchema = new Schema(
  {
    todoTitle: String,
  },
  { timestamps: true }
);

module.exports = {
  Todo: model("todo", todoSchema),
};
