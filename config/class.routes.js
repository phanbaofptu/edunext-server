const express = require('express');
const router = express.Router();

const ClassController = require('../controllers/api/ClassController.js');

router.post('/add', ClassController.add);
router.put('/update/:id', ClassController.update);
router.delete('/delete/:id', ClassController.delete);
router.get('/', ClassController.index);
module.exports = router;
