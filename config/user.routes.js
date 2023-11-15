const express = require("express");
const router = express.Router();

const UserController = require("../controllers/api/UserController");

router.post("/add", UserController.add);
router.put("/update/:id", UserController.update);
router.delete("/delete/:id", UserController.delete);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);

router.get("/auth", UserController.auth);
router.get("/", UserController.index);
module.exports = router;
