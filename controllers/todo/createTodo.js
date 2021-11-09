const { Todo } = require("../../models/Todo");

const creatNewTodo = async (req, res, next) => {
console.log(req.body)
  try {
    let { todoTitle } = req.body;
    if (!todoTitle)
      return res
        .status(400)
        .json({ success: false, msg: "All fields are required" });

    let newTodoTitle = todoTitle.toLowerCase().replace(/ /g, "");

    const newTodo = new Todo({
      todoTitle: newTodoTitle
    });

    await newTodo.save();
    if (!newTodo) return res.status(500).json({ msg: "An error has occurred" });

    res.status(201).json({
      success: true,
      msg: "Todo added successfully",
      todo: newTodo,
    });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = creatNewTodo;
