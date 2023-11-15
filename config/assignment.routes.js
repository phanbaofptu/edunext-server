const express = require("express");
const router = express.Router();

const AssignmentController = require("../controllers/api/AssignmentController.js");

router.post("/add", AssignmentController.add);
router.put("/update/:id", AssignmentController.update);
router.delete("/delete/:id", AssignmentController.delete);
router.get("/:id", AssignmentController.findById);
router.get("/", AssignmentController.index);
module.exports = router;
