const express = require("express");
const router = express.Router();

const CourseController = require("../controllers/api/CourseController.js");
const {
  checkAdmin,
  checkAuth,
  checkUser,
} = require("../middlewares/AuthMiddlewares.js");

router.post("/add", checkAdmin, CourseController.add);
router.put("/update/:id", checkAdmin, CourseController.update);
router.delete("/delete/:id", checkAdmin, CourseController.delete);
router.get("/:id", checkUser, CourseController.findById);
router.get("/", checkUser, CourseController.index);
module.exports = router;
