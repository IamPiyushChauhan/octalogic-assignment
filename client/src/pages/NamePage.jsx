import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
const NamePage = ({data,setData}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate()
  const handleNextClick = () => {

    setData((prev)=> ({...prev,fname: firstName,lname: lastName}));
    navigate('/select')
  };

  return (
    <div className='card' style={{padding: "2em"}}>
      <label>
        
        <input
          type="text"
          value={firstName}
          placeholder='First Name:'
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>

      <br />

      <label>
        
        <input
          type="text"
          value={lastName}
          placeholder='Last Name:'
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>

      <br />

      <button className='btn btn-primary' onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default NamePage;
