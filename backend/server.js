const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// TODOS API
app.get("/todos", (req, res) => {
  res.json([
    { id: 1, text: "Learn DevOps", done: false },
    { id: 2, text: "Build a project", done: false }
  ]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
