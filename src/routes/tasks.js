const express = require("express");
const router = express.Router();

let tasks = [];

// GET all
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST create
router.post("/", (req, res) => {
  const { title, description, status } = req.body;

  if (!title && !description) {
    return res.status(400).json({ error: "title ou description requis" });
  }

  const task = {
    id: tasks.length + 1,
    title,
    description,
    status: status || "todo"
  };

  tasks.push(task);

  res.status(201).json(task);
});

module.exports = router;