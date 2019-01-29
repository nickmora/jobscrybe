const router = require("express").Router();
const booksController = require("../../controllers/resumecontroller");

// Matches with "/api/books"
router.route("/")
  .get(resumecontroller.findAll)
  .post(resumecontroller.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(resumecontroller.findById)
  .put(resumecontroller.update)
  .delete(resumecontroller.remove);

module.exports = router;
