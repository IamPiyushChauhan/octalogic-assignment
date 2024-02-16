const service = require('../service/vehicleTypeService')

class VehicleController {
     static async getVehicleType(request,responce) {
        try{
            const {type} = request.params
            console.log(type)
            const data = await service.fetchVehicleType(type)
            return responce.status(200).json(data)
        }catch(e){
            console.log(e);
            return responce.status(500).json({error: e})
        }
        
    }
}

module.exports = VehicleController