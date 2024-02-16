const sequelize = require("../database");
const Vehicle = require("../models/vehicle")


class VehicleTypeService {
    static async fetchVehicleType(type) {
        try{
            await sequelize.sync();
            const vehicles = await Vehicle.findAll(
                                                  { 
                                                    raw: true,
                                                    where: {type: type},
                                                    attributes: ['name']
                                                });
            return vehicles;
        }catch(e){
            console.log(e) 
        } 
    }
}

module.exports = VehicleTypeService