import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import { UserData } from './Data';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
function App() {
 
  const [userData,setUserData] = useState({
    labels: UserData.map((data)=>data.year),
    datasets:[{
      label:"Users Gained",
      data:UserData.map((data)=>data.userGain),
      backgroundColor:["blue","red"]
    }]
  });

  return (
    <div className="App">
      <div style ={{width:700}}>
        <BarChart chartData={userData}/>
      </div>

      <div style ={{width:700}}>
        <LineChart chartData={userData}/>
      </div>

      <div style ={{width:700}}>
        <PieChart chartData={userData}/>
      </div>
    </div>
  );
}

export default App;
