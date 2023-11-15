const express = require("express");
const router = express.Router();

const QuestionController = require("../controllers/api/QuestionController.js");

router.post("/add", QuestionController.add);
router.put("/update/:id", QuestionController.update);
router.delete("/delete/:id", QuestionController.delete);
router.get("/:id", QuestionController.findById);
router.get("/", QuestionController.index);
module.exports = router;
