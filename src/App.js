import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [age, setAge] = useState(0);
  const [bpmL, setBpmL] = useState(0);
  const [bpmU, setBpmU] = useState(0);

  function calculate() {
    setBpmU((220-age)*0.85)
    setBpmL((220-age)*0.65)
  }
  
  return (
    <div>

      <h3>Heart rate limits calculator</h3>

      <form>
        <div>
          <label>Age</label>
          <input type="number" value={age} onChange={e => setAge(e.target.value)} />
        </div>

        <div>
          <label>Heart rate limits </label>
          <output>{bpmL.toFixed(0)}-{bpmU.toFixed(0)}</output>
        </div>
          <button type="button" onClick={calculate}>Calculate</button>
      </form>
      
    </div>
  )
}

export default App;
