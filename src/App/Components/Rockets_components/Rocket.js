import React from "react";

export function Rocket(props) {

    const data = props.data;
    // console.log(data);
    return ( 
        <div className="rocket">
            <img src={data.flickr_images[0]} width="200" alt={data.name}></img>
            <div className="text">
                <h3>{data.name}</h3>
                <ul>
                    <li><strong>Active: </strong>{data.active? "Active": "Inactive"}</li>
                    <li><strong>Height: </strong>{data.height.meters}m</li>
                    <li><strong>Mass: </strong>{data.mass.kg}kg</li>
                    <li><strong>First Flight: </strong>{data.first_flight}</li>
                    <li><strong>Cost Per Launch: </strong>{data.cost_per_launch}$</li>
                    <li><strong>Success rate: </strong>{data.success_rate_pct}%</li>
                </ul>
            </div>
            
        </div> 
    );
}