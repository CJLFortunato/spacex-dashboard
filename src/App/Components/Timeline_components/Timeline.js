import React from "react";

import { Event } from "./Event";

export function Timeline(props) {

    const data = props.data;

    return ( 
        <div  className="timeline">
            <h2>Timeline</h2>

            {data.map(event => <Event event={event} key={event.id}/>)}
        </div> 
    );
}