const express = require("express");
const temperatureController = require("../controller/temperatureController");
const router = express.Router();

router.get('/temperatureconvert/:value.:from.:to', temperatureController.convert);
router.get('/temperatureconvert/units',temperatureController.getUnitsMesurement);

module.exports = router;