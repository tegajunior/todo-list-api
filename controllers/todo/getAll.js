const { Todo } = require("../../models/Todo");

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find({}).sort({ _id: -1 });
    if (!allTodos)
      return res.status(500).json({ success: false, msg: "No Todos found" });

    return res.status(201).json({
      success: true,
      msg: "All Todos Fetched",
      allTodos,
    });
  } catch (err) {
    return res.status(500).json({ success: false, msg: err.message });
  }
};

module.exports = getAllTodos;
