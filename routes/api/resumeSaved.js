const router = require("express").Router();
const resumeController = require("../../controllers/resumecontroller");

// Matches with "/api/books"
router.route("/")
  .get(resumeController.findAll)
  .post(resumeController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(resumeController.findById)
  .put(resumeController.update)
  .delete(resumeController.remove);

module.exports = router;
