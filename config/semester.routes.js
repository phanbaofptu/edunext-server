const express = require("express");
const router = express.Router();

const SemesterController = require("../controllers/api/SemesterController.js");
const {
  checkAdmin,
  checkAuth,
  checkUser,
} = require("../middlewares/AuthMiddlewares.js");

router.post("/add", checkAdmin, SemesterController.add);
router.put("/update/:id", checkAdmin, SemesterController.update);
router.delete("/delete/:id", checkAdmin, SemesterController.delete);
router.get("/", checkUser, SemesterController.index);
module.exports = router;
