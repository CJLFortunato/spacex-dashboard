import React from "react";
import { Chart, registerables } from "chart.js";

import { getLaunchesByYear } from "../../Utils/helperFunctions";
import { Bar } from "react-chartjs-2";

Chart.register(...registerables);

export function NbLaunches(props) {


    const totalLaunches = props ? props.data.totalDocs : "?";

    const data = props.data.docs ? props.data.docs : props.data;

    const dataset = getLaunchesByYear(data);

    const chartData = {
        labels: Object.keys(dataset),
        datasets: [
            {
                label: "Launches per year",
                backgroundColor: 'dodgerblue',
                borderColor: 'dodgerblue',
                data: Object.values(dataset),
            }
        ]
    }



    return (
        <div className="nb-launches">
            <h2>Number of launches: <span>{totalLaunches}</span></h2>
            <div className="chart">
                <Bar data={chartData} />
            </div>

        </div>
    );
}