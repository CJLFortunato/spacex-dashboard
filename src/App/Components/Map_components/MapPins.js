import React, { useState } from "react";

export function MapPins(props) {

    const [ displayData, setDisplayData ] = useState(false);
    
    // console.log(props);

    const data = props.data;

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

    //{ displayData && details}

  return (
      <div className="map-pin" onMouseOver={() => setDisplayData(true)} onMouseOut={() => setDisplayData(false)}>     
          <p style={style}><i className="fa-solid fa-location-dot"></i></p>
          <h3>{data.full_name}</h3>
      </div>
  );
}