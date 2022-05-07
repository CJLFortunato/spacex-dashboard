import React from "react";

export function Event(props) {

    const event = props.event? props.event : {};

    return ( 
        <div className="event">
            <p>{ event.event_date_utc }</p>
            <h3>{ event.title }</h3>
        </div> 
    );
}