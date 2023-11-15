const express = require("express");
const router = express.Router();

const SlotController = require("../controllers/api/SlotController.js");

router.post("/add", SlotController.add);
router.put("/update/:id", SlotController.update);
router.delete("/delete/:id", SlotController.delete);
router.get("/:id", SlotController.findById);
router.get("/", SlotController.index);
module.exports = router;
