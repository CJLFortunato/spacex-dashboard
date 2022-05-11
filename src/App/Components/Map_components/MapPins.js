import React, { useState } from "react";

export function MapPins(props) {

     //console.log(props);

    const data = props.data;
    const collectData = props.collect;


    const color = props.type === 'landpad'? '#163fef' : '#ab132c';
    const style = { color: color};

    const details = 
    <div className="pad-data">
        <h3>{data.full_name}</h3>
        <p>{data.locality}, {data.region}</p>
        <p><em>{data.status}</em></p>
        <p>Lat:{data.latitude}, Lon:{data.longitude}</p>
        <p>Success rate: {data.landing_attemps / data.landing_successes}</p>
    </div>;

    const handleClick = () => {

        const dataWithType = { ...data, type: props.type }
        collectData(dataWithType);
        props.toggle();
    }

  return (
      <div className="map-pin" onClick={handleClick}>     
          <p style={style}><i className="fa-solid fa-location-dot"></i></p>
      </div>
  );
}