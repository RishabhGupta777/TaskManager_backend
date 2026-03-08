const Task = require("../models/todo.model");

exports.createTask = async (req, res) => {

  const { title, description, userId } = req.body

  const task = await Task.create({
    userId: userId,
    title: title,
    description: description
  });

  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user });

  res.json(tasks);
};

exports.deleteTask = async (req, res) => {
  
  await Task.findByIdAndDelete(req.params.id);

  res.json({ message: "Task deleted" });
};

exports.completeTask = async(req, res) => {
  await Task.findByIdAndUpdate(req.params.id, {
    completed: true
  })

  res.json({ message: "Task Completed" })
}