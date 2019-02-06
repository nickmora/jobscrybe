const path = require("path");
const router = require("express").Router();
const jobRoutes = require("./jobs");
const githubRoutes = require("./github");

// Job routes
router.use("/jobs", jobRoutes);

// github Routes
router.use("/github", githubRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
