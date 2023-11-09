const express = require("express");
const router = express.Router();

const ClassController = require("../controllers/api/ClassController.js");
const { checkAdmin, checkUser } = require("../middlewares/AuthMiddlewares.js");

router.post("/add", checkAdmin, ClassController.add);
router.put("/update/:id", checkAdmin, ClassController.update);
router.delete("/delete/:id", checkAdmin, ClassController.delete);
router.get("/", checkUser, ClassController.index);
module.exports = router;
