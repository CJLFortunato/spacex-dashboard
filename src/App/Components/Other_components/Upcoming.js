import React from "react";

export function Upcoming(props) {

    const data = props.data.docs? props.data.docs[0]: {};

    const date = new Date(data.date_utc);
    const readableDate = date.toLocaleString('fr-FR');

    return ( 
        <div className="upcoming">
            <h2>Upcoming launch</h2>
            <h2 className="upcoming-date">{readableDate}</h2>
            <p>{data.name}</p>
        </div> 
    );
}