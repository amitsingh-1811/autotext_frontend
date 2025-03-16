import { useState } from 'react';
import './App.css';
import WeatherReport from './WeatherReport';

function App() {
  const [cityName, setCityName] = useState("")
  function setInput(e){
    setCityName(e.target.value)
  }
  
  return (
    <div className="App">
      <h1 style={{textDecoration: 'underline'}}>Weather Report</h1>
      <input className='Input' 
              type='text' 
              placeholder='give city name'
              value={cityName}
              onChange={setInput}/>
      <WeatherReport cityName={cityName}/>
    </div>
  );
}

export default App;
