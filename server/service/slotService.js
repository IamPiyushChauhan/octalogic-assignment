const sequelize = require("../database");
const Slot = require("../models/Slot")

class SlotService{

    static async fetchSlots(vehicleID){
        try{
            await sequelize.sync();
            const slots = await Slot.findAll(
                                                { 
                                                    raw: true,
                                                    where: {vehicleID: vehicleID},
                                                });
            return slots;
        }catch(e){
            console.log(e);
        }
        
    }

    static async setSlot(fname,lname,startTime,endTime,vehicleID){
        try{
         await sequelize.sync();
         await Slot.create({fname,lname,startTime,endTime,vehicleID});
        }catch(e){
        console.log(e)
        } 
    }
}

module.exports = SlotService
