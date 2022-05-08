import React from "react";

export function MapPins(props) {

    // console.log(props);

    const data = props.data;

    const color = props.type === 'landpad'? 'dodgerblue' : 'pink';
    const style = { color: color};

    return ( 
        <div className="map-pins">
            <h4 style={style}>{data.full_name}</h4>
        </div> 
    );
}