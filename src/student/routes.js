const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "Hello World" });
});

module.exports = router;
