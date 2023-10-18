const express = require('express');
const router = express.Router();

const SemesterController = require('../controllers/api/SemesterController.js');

router.post('/add', SemesterController.add);
router.put('/update/:id', SemesterController.update);
router.delete('/delete/:id', SemesterController.delete);
router.get('/', SemesterController.index);
module.exports = router;
