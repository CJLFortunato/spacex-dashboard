import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from "chart.js";

import { getSuccessRate } from '../../Utils/helperFunctions';


Chart.register(...registerables);

export function SuccessChart(props) {

    const successRate = getSuccessRate(props.data);

    const chartData = {
      labels: ['Successes', 'Failures'],
      datasets: [
          {
              label:'Success rate',
              backgroundColor: ['rgb(5, 200, 90)', 'rgb(200, 24, 26)'],
              borderColor: ['rgb(5, 200, 90)', 'rgb(200, 24, 26)'],
              data: [successRate.successes, successRate.failures]
      }
      ]
  };

    const successPct = (successRate.successes / (successRate.successes + successRate.failures)) * 100;
    return ( 
        <div className="donut-chart">
            
            <div className="donut">
               <Doughnut data={chartData}/> 
            </div>
            <p>Success rate</p>
                <h2 className="chart-title" style={{ color: 'rgb(5, 200, 90)'}}>{successPct.toFixed(1)}% </h2>            
        </div> 
    );
}