const express = require('express');
const router = express.Router();
const controller = require('../controller/iotdatacontroller')

router.get('/', controller.getIoTdata);

module.exports = router;
