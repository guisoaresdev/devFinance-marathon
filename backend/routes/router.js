const express = require("express");
const path = require("path");
const router = express.Router();

const rootdir = "C:/Users/gui_c/Documents/Guilherme/Workspace/devFinance/";

const front_rootdir = rootdir + "frontend";

router.use(express.static(path.join(front_rootdir, "build")));

router.get("*", (req, res) => {
  res.sendFile(path.join(front_rootdir, "build", "index.html"));
});

router.get("/users", (req, res) => {});

module.exports = router;
