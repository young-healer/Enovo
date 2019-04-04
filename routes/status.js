const express = require('express');
const router = express.Router();
const controller = require('../controllers/status');

/* GET users listing. */
router.get('/', controller.getStatus);
router.get('/:date', controller.getStatusByDate);

module.exports = router;
