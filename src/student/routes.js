const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "using api routes" });
});

module.exports = router;
