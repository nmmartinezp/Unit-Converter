const express = require("express");
const weightController = require("../controller/weightController");
const router = express.Router();

router.get('/weightconvert/:value.:from.:to', weightController.convert);
router.get('/weightconvert/units', weightController.getUnitsMesurement);

module.exports = router;