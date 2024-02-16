import './App.css';
import { BrowserRouter as Router,Routes, Route,Outlet } from 'react-router-dom';
import React,{useState} from 'react';
import NamePage from './pages/NamePage';
import VehicleTypeSelector from './pages/VehicleTypeSelector';
import ModelsTypeSelection from './pages/ModelsTypeSelection';
import SlotSelection from './pages/SlotSelection';
import ModelSelection from './pages/ModelSelection';
function App() {

  const [data,setData] = useState({})
  return (
    <div className="App">
      
      <Router>
        <Routes>
        <Route path="/" element={<NamePage data={data} setData={setData}/>}/>
        <Route path="/select" element={<VehicleTypeSelector data={data} setData={setData}/>}/>
        <Route path="/model-type" element={<ModelsTypeSelection data={data} setData={setData}/>}/>
        <Route path="/model" element={<ModelSelection data={data} setData={setData}/>}/>
        <Route path="/slot" element={<SlotSelection data={data} setData={setData}/>}/>
        </Routes>
        <Outlet />
      </Router>

      
    </div>
  );
}

export default App;
