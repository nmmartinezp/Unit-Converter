const unitsMesurement = require('../utils/unitsMesurement');

class convertService {
    async convertUnit(key, value, from, to){
        try {
            const valueFrom = unitsMesurement[key][from];
            const valueTo = unitsMesurement[key][to];
            return await Number(((value*valueTo)/valueFrom).toFixed(4));
        } catch (err) {
            throw new Error("Error trying to convert");
        }
    }

    async unitsMesurement(key){
        try {
            const unitsMesurements = await Object.keys(unitsMesurement[key]);
            return unitsMesurements;
        } catch (err) {
            throw new Error("Error trying to get units mesurement");
        }
    }
}

module.exports = new convertService();