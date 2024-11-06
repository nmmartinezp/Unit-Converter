const temperatureUnits = require('../utils/unitTemperature');

class temperatureService {
    async convertUnit(value, from, to){
        try {
            const valueFrom = temperatureUnits[from];
            const valueTo = temperatureUnits[to];
            return await Number(((value*valueTo)/valueFrom).toFixed(4));
        } catch (err) {
            throw new Error("Error trying to convert");
        }
    }

    async unitsMesurement(){
        try {
            const unitsMesurement = await Object.keys(temperatureUnits);
            return unitsMesurement;
        } catch (err) {
            throw new Error("Error trying to get units mesurement");
        }
    }
}

module.exports = new temperatureService();