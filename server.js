const express = require("express");
const studentRoutes = require("./src/student/routes");

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Hello World" });
});

app.use("/api/v1/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
