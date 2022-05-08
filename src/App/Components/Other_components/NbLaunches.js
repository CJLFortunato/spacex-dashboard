import React from "react";

import { getLaunchesByYear } from "../../Utils/helperFunctions";

export function NbLaunches(props) {


    const totalLaunches = props ? props.data.totalDocs : "?";

    const data = props.data.docs? props.data.docs : props.data;

    const dataset = getLaunchesByYear(data);



    return ( 
        <div className="nb-launches">
            <h2>Number of launches: <span>{totalLaunches}</span></h2>
            <ul>{Object.keys(dataset).map(year => <li key={year}><strong>{year}: </strong>{dataset[year]}</li>)}</ul>
        </div> 
    );
}