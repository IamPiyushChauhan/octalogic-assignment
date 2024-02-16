const express = require('express');
const router = express.Router();
const Controller = require('../controller/slotController');

router.post('/',Controller.postSlotBook)

module.exports = router