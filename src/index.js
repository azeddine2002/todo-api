const express = require("express");

const app = express();

app.use(express.json());
// routes
const tasksRoutes = require("./routes/tasks.routes");
app.use("/api/tasks", tasksRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API OK 🚀" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
