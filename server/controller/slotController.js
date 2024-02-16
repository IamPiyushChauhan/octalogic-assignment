const { response } = require('express');
const service = require('../service/slotService')

class SlotController {
    static async postSlotBook(request,responce){
        const {fname,lname,startTime,endTime,vehicleID} = request.query
        console.log(request.query)
        const isOverlapping = false
        try{
            const slots = await service.fetchSlots(vehicleID);
            
            console.log(slots);
            if(slots.length === 0) {
              
                await service.setSlot(fname,lname,startTime,endTime,vehicleID)
                
            }else{
               
                for(let i=0;i<slots.length;i++){
                    
                    const obj = slots[i];
                   
                    if(Math.max(obj.startTime,startTime) <= Math.min(obj.endTime,endTime)){
                        isOverlapping = true
                        
                        break;
                    }
                }
                console.log("isOverlapping ",isOverlapping)
                if(isOverlapping){console.log("------------------------- isOverlapping")
                   responce.status(403).json({message: "slot reseved by else"})
                }else{
                    console.log("-------------------------else isOverlapping")
                    await service.setSlot(fname,lname,startTime,endTime,vehicleID);
                    console.log("SAVED")
                    responce.status(200).json({message: "saved"})
                    
                }

            }
        }catch(e){
            responce.status(500).json({error: e})
        }
    }
}

module.exports = SlotController