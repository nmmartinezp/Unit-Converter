const express = require("express");
const convertController = require("../controller/convertController");
const router = express.Router();

router.get('/convert/:type/:value.:from.:to',convertController.convert);
router.get('/mesurements/:type',convertController.getUnitsMesurement);

module.exports = router;