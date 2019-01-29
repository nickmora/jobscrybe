const router = require("express").Router();
const resumeRoutes = require("./resumeSaved");

// Book routes
router.use("/resumeSaved", resumeRoutes);

module.exports = router;
