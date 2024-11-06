const express = require("express");
const lengthController = require("../controller/lengthController");
const router = express.Router();

router.get('/convert', lengthController.prueba);// Test
router.get('/lengthconvert/:value.:from.:to',lengthController.convert);
router.get('/lengthconvert/units',lengthController.getUnitsMesurement);

module.exports = router;