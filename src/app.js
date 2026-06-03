const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const taskRoutes = require("./routes/tasks");

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/tasks", taskRoutes);

module.exports = app;