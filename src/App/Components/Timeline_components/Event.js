import React from "react";

export function Event(props) {

    const event = props.event? props.event : {};

    const date = new Date(event.event_date_utc);
    const readableDate = date.toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit' });

    return ( 
        <div className="event">
            <p>{ readableDate }</p>
            <h3>{ event.title }</h3>
        </div> 
    );
}