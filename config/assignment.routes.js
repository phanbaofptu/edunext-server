const express = require("express");
const router = express.Router();

const AssignmentController = require("../controllers/api/AssignmentController.js");
const {
  checkAdmin,
  checkAuth,
  checkUser,
  checkTeacher,
} = require("../middlewares/AuthMiddlewares.js");

router.post("/add", checkTeacher, AssignmentController.add);
router.put("/update/:id", checkTeacher, AssignmentController.update);
router.delete("/delete/:id", checkTeacher, AssignmentController.delete);
router.get("/:id", checkUser, AssignmentController.findById);
router.get("/", checkUser, AssignmentController.index);
module.exports = router;
