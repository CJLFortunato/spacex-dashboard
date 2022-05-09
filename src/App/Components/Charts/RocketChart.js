import React from "react";
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables, ArcElement } from "chart.js";

import { getLaunchesByRocket, colorGenerator } from '../../Utils/helperFunctions';


Chart.register(...registerables);

export function RocketChart(props) {

    const launchNumberPerRocket = getLaunchesByRocket(props.data);
    const labels = Object.keys(launchNumberPerRocket);

    const generateChartColors = () => {

        const chartColors = [];

        for (let i = 0; i < labels.length; i++) {
            chartColors.push(colorGenerator(labels[i] + 'orbit')); // The word 'orbit' is added to make sure 'falcon 1' and 'falcon 9' have distinct enough colors.
        }
        return chartColors;
    }
    const chartColors = generateChartColors();

    const getData = () => {

        const data = [];

        for (let rocket of labels) {
            data.push(launchNumberPerRocket[rocket]);
        }
        return data;
    }

    const chartData = {
      labels: labels,
      datasets: [
          {
              label:'Launches per rocket type',
              backgroundColor: chartColors,
              borderColor: chartColors,
              data: getData()
      }
      ]
  };

    const successPct = (56 / (56 + 456)) * 100;
    return ( 
        <div className="donut-chart">
            
            <Doughnut data={chartData}/>
            <h3>Number of launches per rocket type</h3>
        </div> 
    );
}