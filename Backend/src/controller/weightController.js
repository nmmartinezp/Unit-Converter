const { success } = require("../middlewares/response");
const weightService = require('../services/weightService');

class weightController {
    async convert(req, res, next){
        try {
            const item = await weightService.convertUnit(req.params.value, req.params.from, req.params.to);
            success(req, res, item, 200);
        } catch (err) {
            next(err);
        }
    }

    async getUnitsMesurement(req, res, next){
        try {
            const items = await weightService.unitsMesurement();
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new weightController();