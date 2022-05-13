import React from "react";

import { useCountdown } from "../../Utils/customHooks";

export function Upcoming(props) {

    const data = props.data.docs? props.data.docs[0]: {};

    const date = new Date(data.date_utc);
    const readableDate = date.toLocaleString('fr-FR');

    const countdown = useCountdown(date);
    

    return ( 
        <div className="upcoming">
            <h2>Upcoming launch</h2>
            <h2 className="countdown">{countdown}</h2>
            <h2 className="upcoming-date">{readableDate}</h2>
            <p>{data.name}</p>
        </div> 
    );
}