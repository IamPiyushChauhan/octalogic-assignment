import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const ModelSelection = ({data,setData}) => {
  const [models, setModels] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [i,setI] = useState(0)
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch data using Axios
    console.log(data)
    axios.get(`/model/${data.model}`)
      .then(response => {
        setModels(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleOptionChange = (event,index) => {
    setI(index)
    setSelectedOption(event.target.value);
  };
  const onClick = ()=>{
    if(selectedOption!==''){
        setData(prev=> ({...prev,carNumber: models[i].uniqueNumber}))
        navigate('/slot')
    }
  }
  return (
    <div className='card' style={{padding: "2em"}}>
      <h2>Select a model</h2>

      {models.map((item,index) => (
        <label key={item.name} style={{padding: "0.5em"}}>
          <input
            type="radio"
            value={item.name}
            checked={selectedOption === item.name}
            onChange={(e)=>{handleOptionChange(e,index)}}
          />
          {item.name}
        </label>
      ))}

     <button onClick={onClick} className='btn btn-primary'>Next</button>
    </div>
  );
};

export default ModelSelection;
