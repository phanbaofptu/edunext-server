const express = require("express");
const router = express.Router();

const QuestionController = require("../controllers/api/QuestionController.js");
const {
  checkAdmin,
  checkAuth,
  checkUser,
  checkTeacher,
} = require("../middlewares/AuthMiddlewares.js");

router.post("/add", checkTeacher, QuestionController.add);
router.put("/update/:id", checkTeacher, QuestionController.update);
router.delete("/delete/:id", checkTeacher, QuestionController.delete);
router.get("/:id", checkUser, QuestionController.findById);
router.get("/", checkUser, QuestionController.index);
module.exports = router;
