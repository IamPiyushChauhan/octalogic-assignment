const express = require('express');
const vehicleRoute = require('./routes/vehicleRoute')
const modelRoute = require('./routes/modelRoute')
const slotRoute = require('./routes/slotRoute')
const app = express();

app.use("/type",vehicleRoute)
app.use("/model",modelRoute)
app.use('/slot',slotRoute)

app.listen(8080,()=>{
    console.log("Surver is running on 8080");
})







// const vts = require("./service/vehicleTypeService")
// const ms = require("./service/modelsService")


// async function  fetchAllData(){
//     let  data = await vts.fetchVehicleType("car");
//       console.log(data)

//     for(let i=0;i<data.length;i++){
//         let obj = data[i]
//         fetchMS(obj.name)
//     }
// }

// async function fetchMS(type) {
//     let  data = await ms.fetchModelType(type);
//     console.log(data)
// }



// fetchAllData();