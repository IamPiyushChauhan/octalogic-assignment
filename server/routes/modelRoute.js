const express = require('express');
const router = express.Router();
const Controller = require('../controller/modelController');

router.get('/:type',Controller.getVehicleType)

module.exports = router