import React, { useState } from 'react';
import { useNavigate , Outlet} from 'react-router-dom'
const VehicleTypeSelector = ({data,setData}) => {
    const navigate = useNavigate()
  const [selectedOption, setSelectedOption] = useState(''); // State to track the selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onClick = ()=>{
    if(selectedOption!==''){
        setData(prev=> ({...prev,type: selectedOption==="4-wheelers"? "car":"bike"  }))
        navigate('/model-type')
    }
  }

  return (
    <div className='card' style={{padding: "2em"}}>
      <h3 className='card-title' style={{padding: "0.5em"}}>Select Vehicle Type:</h3>

      <label style={{padding: "0.5em"}}>
        <input
          type="radio"
          value="2-wheelers"
          checked={selectedOption === '2-wheelers'}
          onChange={handleOptionChange}
        />
        2 Wheelers
      </label>

      <label style={{padding: "0.5em"}}>
        <input
          type="radio"
          value="4-wheelers"
          checked={selectedOption === '4-wheelers'}
          onChange={handleOptionChange}
        />
        4 Wheelers
      </label>

      <button  onClick={onClick} className='btn btn-primary' style={{padding: "0.5em"}}>Next</button>
      <Outlet />
    </div>
  );
};

export default VehicleTypeSelector;
