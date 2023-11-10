const express = require("express");
const router = express.Router();

const SlotController = require("../controllers/api/SlotController.js");
const {
  checkAdmin,
  checkAuth,
  checkUser,
  checkTeacher,
} = require("../middlewares/AuthMiddlewares.js");

router.post("/add", checkTeacher, SlotController.add);
router.put("/update/:id", checkTeacher, SlotController.update);
router.delete("/delete/:id", checkTeacher, SlotController.delete);
router.get("/:id", checkUser, SlotController.findById);
router.get("/", checkUser, SlotController.index);
module.exports = router;
