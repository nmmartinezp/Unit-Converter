const lengthUnits = require('../utils/unitLength');

class lengthService {
    async convertUnit(value, from, to){
        try {
            const valueFrom = lengthUnits[from];
            const valueTo = lengthUnits[to];
            return await Number(((value*valueTo)/valueFrom).toFixed(4));
        } catch (err) {
            throw new Error("Error trying to convert");
        }
    }

    async unitsMesurement(){
        try {
            const unitsMesurement = await Object.keys(lengthUnits);
            return unitsMesurement;
        } catch (err) {
            throw new Error("Error trying to get units mesurement");
        }
    }
}

module.exports = new lengthService();