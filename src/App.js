import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import { UserData } from './Data';
function App() {
 
  const [userData,setUserData] = useState({
    labels: userData.map((data)=>data.year),
    datasets:[{
      label:"Users Gained",
      data:userData.map((data)=>data.userGain)
    }]
  });

  return (
    <div className="App">
      <BarChart chartData={UserData}/>
    </div>
  );
}

export default App;
