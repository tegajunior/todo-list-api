const express = require("express");
const router = express.Router();
const verify = require("../../middleware/authjwt");

const createTodo = require("../../controllers/todo/createTodo");
const getAll = require("../../controllers/todo/getAll");
const deleteTodo = require('../../controllers/todo/deleteTodo')

router
  .route("/")
  .post(verify, createTodo)
  .get(verify, getAll);

  router.delete("/:id", verify, deleteTodo);

  module.exports = router;

