const { Todo } = require("../../models/Todo");

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)
    if (!todo)
      return res.status(400).json({ success: false, msg: "No Todo found" });

    return res.status(201).json({
      success: true,
      msg: "Todo deleted",
    });
  } catch (err) {
    return res.status(500).json({ success: false, msg: err.message });
  }
};

module.exports = deleteTodo;