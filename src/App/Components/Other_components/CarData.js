import React from "react";

export function CarData (props) {

    const distance = props.data.earth_distance_km? props.data.earth_distance_km.toFixed(): "unknown";

    return ( 
        <div className="car-data">
            <h2>Elon Musk's Tesla Roadster is <span>{distance} km</span> away from Earth</h2>
            <p>It was launched onto an heliocentric orbit in 2018.</p>
        </div> 
    );
}