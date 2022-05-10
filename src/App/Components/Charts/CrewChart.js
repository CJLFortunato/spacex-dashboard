import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";

import { getCrewRate } from '../../Utils/helperFunctions';


Chart.register(...registerables);

export function CrewChart(props) {

    const crewRate = getCrewRate(props.data);

    const chartData = {
      labels: ['Manned', 'Unmanned'],
      datasets: [
          {
              label:'Success rate',
              backgroundColor: ['rgb(5, 200, 290)', 'rgb(120, 124, 126)'],
              borderColor: ['rgb(5, 200, 290)', 'rgb(120, 124, 126)'],
              data: [crewRate.manned, crewRate.unmanned]
      }
      ]
  };

    const crewPct = (crewRate.manned / (crewRate.manned + crewRate.unmanned)) * 100;
    return ( 
        <div className="donut-chart">
            <Doughnut data={chartData}/>
            <div className="chart-title"> 
                <h2 style={{ color: 'rgb(5, 200, 290)'}} >{crewPct.toFixed(1)}% </h2>
                <p>Manned Launches</p>
            </div>
        </div> 
    );
}