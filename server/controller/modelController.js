const service = require('../service/modelsService')

class ModelController {
     static async getVehicleType(request,responce) {
        try{
            const {type} = request.params
            const data =  await service.fetchModelType(type);
            return responce.status(200).json(data)
        }catch(e){
            console.log(e);
            return responce.status(500).json({error: e})
        }
    }
}

module.exports = ModelController;