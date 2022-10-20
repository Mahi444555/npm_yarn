import React from 'react';
import BarChart from './components/BarChart';
import DoughnutCharts from './components/DoughnutCharts';
import LineCharts from './components/LineCharts';


function App(){
  return(
    <div className="App">
      <div className="chart">
        <LineCharts/>
        <BarChart/>
        <DoughnutCharts/>
      </div>
    </div>
  )
}

export default App;