import React, { useEffect, useState } from "react";

import { Rocket } from "./Rocket";

export function RocketsCarousel(props) {

    const data = props.data? props.data : [];
    // console.log(data);
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

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

    useEffect(( )=> {
        const interval = setInterval(() => {

            if(!paused) {
               updateIndex(activeIndex + 1); 
            }
            
        }, 10000);

        return () => {
            if(interval) {
                clearInterval(interval);
            }
        };
    });

    return ( 
        <div className="rockets-carousel">

            <button 
                onClick={() => updateIndex(activeIndex - 1)}
            >
                <i className="fa-solid fa-angle-left"></i>
            </button>
            
            <div 
                className="carousel" 
                onMouseEnter={() => setPaused(true)} 
                onMouseLeave={() => setPaused(false)}
            >
                <div 
                    className="inner" 
                    style={{ transform: `translateX(-${activeIndex * 101}%)` }}
                >
                   {data.map(rocket => <Rocket data={rocket} key={rocket.id}/>)} 
                </div>
            </div>

            <button 
                onClick={() => updateIndex(activeIndex + 1)}
            >
                <i className="fa-solid fa-angle-right"></i>
            </button>

        </div> 
    );
}