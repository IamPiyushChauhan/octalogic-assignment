const sequelize = require("../database");
const Model = require("../models/Model")


class ModelService {
    static async fetchModelType(type) {
        try{
            await sequelize.sync();
            const vehicles = await Model.findAll(
                                                  { 
                                                    raw: true,
                                                    where: {vehicleType: type},
                                                    attributes: ['name','uniqueNumber']
                                                });
            return vehicles;
        }catch(e){
            console.log(e) 
        } 
    }
}

module.exports = ModelService