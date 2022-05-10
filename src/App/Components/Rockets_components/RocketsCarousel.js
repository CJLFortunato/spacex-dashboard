import React, { useState } from "react";

import { Rocket } from "./Rocket";

export function RocketsCarousel(props) {

    const data = props.data? props.data : [];
    // console.log(data);
    const [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex);
    const updateIndex = (newIndex) => {
        const nbCards = document.getElementsByClassName("rocket").length;
        console.log(nbCards);
        if (newIndex < 0) {
            newIndex = nbCards -1;
        } else if (newIndex >= nbCards) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    }

    return ( 
        <div className="rockets-carousel">
            <button onClick={() => updateIndex(activeIndex - 1)}><i className="fa-solid fa-angle-left"></i></button>
            <div className="carousel">
                <div className="inner" style={{ transform: `translateX(-${activeIndex * 101}%)` }}>
                   {data.map(rocket => <Rocket data={rocket} key={rocket.id}/>)} 
                </div>
            </div>
            <button onClick={() => updateIndex(activeIndex + 1)}><i className="fa-solid fa-angle-right"></i></button>
        </div> 
    );
}