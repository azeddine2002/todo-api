const express = require("express");
const router = express.Router();

// Fake data temporaire (avant PostgreSQL)
let tasks = [];
let id = 1;

// GET all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// GET task by id
router.get("/:id", (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
});

// POST create task
router.post("/", (req, res) => {
  const { title, description, status } = req.body;

  const newTask = {
    id: id++,
    title,
    description,
    status: status || "todo",
    created_at: new Date(),
    updated_at: new Date()
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

// PUT update task
router.put("/:id", (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const { title, description, status } = req.body;

  if (title) task.title = title;
  if (description) task.description = description;
  if (status) task.status = status;

  task.updated_at = new Date();

  res.json(task);
});

// DELETE task
router.delete("/:id", (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));

  res.json({ message: "Task deleted" });
});

module.exports = router;