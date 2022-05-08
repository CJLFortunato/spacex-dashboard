import React from "react";

import { Rocket } from "./Rocket";

export function RocketsCarousel(props) {

    const data = props.data? props.data : [];
    // console.log(data);

    return ( 
        <div className="rockets-carousel">
            <button>-</button>
            <div className="carousel">
                <div className="inner">
                   {data.map(rocket => <Rocket data={rocket} key={rocket.id}/>)} 
                </div>
            </div>
            <button>+</button>
        </div> 
    );
}