const { success } = require("../middlewares/response");
const temperatureService = require('../services/temperatureService');

class temperatureController {
    async convert(req, res, next){
        try {
            const item = await temperatureService.convertUnit(req.params.value, req.params.from, req.params.to);
            success(req, res, item, 200);
        } catch (err) {
            next(err);
        }
    }

    async getUnitsMesurement(req, res, next){
        try {
            const items = await temperatureService.unitsMesurement();
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new temperatureController();