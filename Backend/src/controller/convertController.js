const { success } = require("../middlewares/response");
const convertService = require('../services/convertService');

class convertController {
    async convert(req, res, next){
        try {
            const item = await convertService.convertUnit(req.params.type, req.params.value, req.params.from, req.params.to);
            success(req, res, item, 200);
        } catch (err) {
            next(err);
        }
    }

    async getUnitsMesurement(req, res, next){
        try {
            const items = await convertService.unitsMesurement(req.params.type);
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new convertController();