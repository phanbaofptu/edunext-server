const express = require("express");
const router = express.Router();

const CourseController = require("../controllers/api/CourseController.js");

router.post("/add", CourseController.add);
router.put("/update/:id", CourseController.update);
router.delete("/delete/:id", CourseController.delete);
router.get("/:id", CourseController.findById);
router.get("/", CourseController.index);
module.exports = router;
