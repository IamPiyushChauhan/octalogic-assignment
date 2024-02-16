import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const ModelsTypeSelection = ({data,setData}) => {
  const [models, setModels] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch data using Axios
    axios.get(`/type/${data.type}`)
      .then(response => {
        setModels(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const onClick = ()=>{
    if(selectedOption!==''){
        setData(prev=> ({...prev,model: selectedOption}))
        navigate('/model')
    }
  }
  return (
    <div className='card' style={{padding: "2em"}}>
      <h2>Select a type</h2>

      {models.map(item => (
        <label key={item.name} style={{padding: "0.5em"}}>
          <input
            type="radio"
            value={item.name}
            checked={selectedOption === item.name}
            onChange={handleOptionChange}
          />
          {item.name}
        </label>
      ))}

     <button onClick={onClick} className='btn btn-primary'>Next</button>
    </div>
  );
};

export default ModelsTypeSelection;
