const weightUnits = require('../utils/unitWeight');

class weightService {
    async convertUnit(value, from, to){
        try {
            const valueFrom = weightUnits[from];
            const valueTo = weightUnits[to];
            return await Number(((value*valueTo)/valueFrom).toFixed(4));
        } catch (err) {
            throw new Error("Error trying to convert");
        }
    }

    async unitsMesurement(){
        try {
            const unitsMesurement = await Object.keys(weightUnits);
            return unitsMesurement;
        } catch (err) {
            throw new Error("Error trying to get units mesurement");
        }
    }
}

module.exports = new weightService();