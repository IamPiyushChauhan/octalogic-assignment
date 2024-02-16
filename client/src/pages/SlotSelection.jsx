import React, { useState } from 'react';
import axios from 'axios';
function SlotSelection({data,setData}) {
  //console.log(data)
  const [startTime,setStartTime] = useState(0);
  const [endTime,setEndTime] = useState(0);

  const onClick =()=>{
    console.log(startTime < endTime)
    console.log(data.fname,data.lname,startTime,endTime,data.carNumber);
    if(startTime < endTime){
      axios.post('/slot', null,{ 
        params: {
        fname: data.fname,
        lname: data.lname,
        startTime: startTime,
        endTime: endTime,
        vehicleID: data.carNumber,
        }
      }).then((res) =>{
        if(res.status === 200){
          alert("Saved Sucessfully")
        }else if(res.status === 403){
          alert("Slot reseved by else")
        }
        })
      .catch((e)=> {console.log(e); alert("Slot Unable to Save")})
    }else{
      alert("Start Time greter then End Time")
    }
      
  
      

  }
  return (
    <div className='card' style={{padding: "2em"}} >
     {data.carNumber} 
     <input style={{padding: "0.5em", margin: "0.5em"}} type="datetime-local" onChange={
      (e)=>{console.log(setStartTime(new Date(e.target.value).getTime()))}}/>

<input style={{padding: "0.5em", margin: "0.5em"}} type="datetime-local" onChange={
      (e)=>{console.log(setEndTime(new Date(e.target.value).getTime()))}}/>
      

      <button onClick={onClick} className='btn btn-primary'>Submit</button>
    </div>
  );

  
}

export default SlotSelection;
