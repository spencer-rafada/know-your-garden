var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "dist/know-your-garden/index.html"));
});

module.exports = router;
