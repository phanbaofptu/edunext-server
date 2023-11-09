const express = require("express");
const router = express.Router();

const UserController = require("../controllers/api/UserController");
const {
  checkTeacher,
  checkAdmin,
  checkUser,
  checkAuth,
} = require("../middlewares/AuthMiddlewares");

router.post("/add", checkAdmin, UserController.add);
router.put("/update/:id", checkAdmin, UserController.update);
router.delete("/delete/:id", checkAdmin, UserController.delete);
router.post("/login", UserController.login);
router.get("/logout", UserController.logout);
router.get("/", checkUser, UserController.index);
module.exports = router;
