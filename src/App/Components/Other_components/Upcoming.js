import React from "react";

export function Upcoming(props) {

    // console.log(props);
    const data = props.data.docs? props.data.docs[0]: {};

    // console.log(data);

    return ( 
        <div className="upcoming">
            <h2>Upcoming launch</h2>
            <h2>{data.date_utc}</h2>
            <p>{data.name}</p>
        </div> 
    );
}