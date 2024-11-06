const { success } = require("../middlewares/response");
const lengthService = require('../services/lengthService');

class lengthController {
    prueba(req, res, next){
        success(req, res, "hola mundo", 200);
    }
    
    async convert(req, res, next){
        try {
            const item = await lengthService.convertUnit(req.params.value, req.params.from, req.params.to);
            success(req, res, item, 200);
        } catch (err) {
            next(err);
        }
    }

    async getUnitsMesurement(req, res, next){
        try {
            const items = await lengthService.unitsMesurement();
            success(req, res, items, 200);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new lengthController();